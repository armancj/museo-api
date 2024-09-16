import { BadGatewayException, Injectable } from '@nestjs/common';
import { EmailServiceModel, SendOptions } from './model/email.service.model';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as Handlebars from 'handlebars';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from '../event-emitter/event-emitter.const';
import { apiEnv } from '../../config/app.const';

export type SendCodeBody = { email: string; code: number };

@Injectable()
export class EmailNodemailerService implements EmailServiceModel {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>(apiEnv.email.host),
      port: +this.configService.get<number>(apiEnv.email.port),
      secure: true, // true for 465, false for other ports
      auth: {
        user: this.configService.get<string>(apiEnv.email.user),
        pass: this.configService.get<string>(apiEnv.email.pass),
      },
    });
  }

  async sendEmail({
    to,
    from = this.configService.get(apiEnv.email.from),
    subject,
    context,
    html,
  }: SendOptions): Promise<void> {
    const templateRender = Handlebars.compile(html);
    const htmlTemplate = templateRender(context);

    await this.transporter.sendMail({
      to,
      from,
      subject,
      html: htmlTemplate,
    });
  }

  @OnEvent(EventEmitter.sendEmailCode)
  async sendCodeEmail({ email, code }: SendCodeBody) {
    console.log({ code, email });
    const subject = 'Recuperación de Contraseña';
    const html = `<a>Introdusca el siguente numero en código para cambiar contraseña: ${code}<a>`;
    await this.sendEmail({
      to: email,
      html,
      subject,
      context: {},
    }).catch((err) => {
      console.log({
        messageError: (err as Error)?.message,
        nameError: (err as Error)?.name,
      });
      throw new BadGatewayException(
        'Failed send email',
        (err as Error)?.message,
      );
    });
    return true;
  }
}
