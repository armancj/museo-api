import { Injectable } from '@nestjs/common';
import {
  EmailServiceModel,
  SendOptions,
} from './model/email.service.model';
import { ConfigService } from '@nestjs/config';
import { Promise } from 'mongoose';
import { MailerService } from "@nestjs-modules/mailer";
import Handlebars from 'handlebars';



@Injectable()
export class EmailNodemailerService implements EmailServiceModel {
  constructor( private readonly configService: ConfigService, private readonly mailerService: MailerService) {}

  async sendEmail({
    to,
    from = this.configService.get('email.from'),
    subject,
    context,
    html,
  }: SendOptions): Promise<void> {
    const templateRender = Handlebars.compile(html);
    const htmlTemplate = templateRender(context);

    await this.mailerService.sendMail({
      to,
      from,
      subject,
      html: htmlTemplate,
    });
  }
}
