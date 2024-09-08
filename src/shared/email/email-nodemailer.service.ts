import {Injectable} from '@nestjs/common';
import {EmailServiceModel, SendOptions} from './model/email.service.model';
import {ConfigService} from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import Handlebars from 'handlebars';

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
}
