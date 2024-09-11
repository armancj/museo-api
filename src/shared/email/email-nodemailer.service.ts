import {BadRequestException, Injectable} from '@nestjs/common';
import {EmailServiceModel, SendOptions} from './model/email.service.model';
import {ConfigService} from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import {OnEvent} from "@nestjs/event-emitter";
import {EventEmitter} from "../event-emitter/event-emitter.const";

export type SendCodeBody = { email: string; code: number}
@Injectable()
export class EmailNodemailerService implements EmailServiceModel {
    private transporter: nodemailer.Transporter;

    constructor(private readonly configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get('email.host'),
            port: this.configService.get('email.port'),
            secure: this.configService.get('email.secure'), // true for 465, false for other ports
            auth: {
                user: this.configService.get('email.user'),
                pass: this.configService.get('email.pass'),
            },
        });
    }

    async sendEmail({
                        to,
                        from = this.configService.get('email.from'),
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
    async sendCodeEmail({ email, code}: SendCodeBody){
        const subject = 'Recuperación de Contraseña';
        const html = `<p>Introdusca el siguente numero en código para cambiar contraseña: ${code}<p>`
        await this.sendEmail({to: email,html, subject }).catch(err => {
            console.log({err})
            throw new BadRequestException('Failed send email')
        });
        return true

    }
}
