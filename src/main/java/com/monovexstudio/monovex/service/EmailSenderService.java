package com.monovexstudio.monovex.service;

import com.monovexstudio.monovex.config.EmailSenderConfig;
import com.monovexstudio.monovex.dto.request.CustomerRequest;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

@Service
public class EmailSenderService{
//    @Autowired
//    private JavaMailSender mailSender;
//    @Autowired
//    private EmailSenderConfig emailConfig;
//    @Value("${spring.mail.username}")
//    private String username;
//
    private String formatAdminMessage(CustomerRequest request){
        String message = "<html><body ><div><h1 >Замовлення!</h1>" +
                "<p>ПІБ: "+request.getCredentials()+"</p> " +
                "<p>Номер телефону: "+request.getPhoneNumber()+"</p> "+
                "<p>e-mail: "+request.getEmail()+"</p> " +
                "<p>Тип послуги: "+request.getServiceType()+"</p> " +
                "<p>Вид сайту: "+request.getSiteType()+"</p> " +
                "<p>Сума на розробку сайта: "+request.getPrice()+"</p> " +
                "<p>Дедлайн: "+request.getDeadline()+"</p> " +
                "<p>Приклад роботи яка подобається: "+request.getWorkExample()+"</p> " +
                "<p>Тематика сайту: "+request.getSiteTheme()+"</p> " +
                "</div></body>" +
                "<style>.title{color:red;}</style></html>";
        return message;
    }
    private String formatClientMessage(){
        String message = "<html><body>" +
                "<div style=\"background-color:#0f4c75; width:100vw; border-radius:10%; height:60vh; " +
                "display: table-cell; vertical-align:center; text-align:center; \">" +
                "<img src=\"https://s8.hostingkartinok.com/uploads/images/2021/03/958699a8cc8f5c89dc37f3b6d61e6678.png\"" +
                "width:50%;height:50%; margin:0;/>" +
                "<div style=\"text-align:center;font-size:25px; margin-left:auto; margin-right:auto;  width:60%; height:50%; border-radius:50px;  background-color:white \">" +
                "<h1>Ваша заявка успішно прийнята.</h1>" +
                "<p>Розгляд заявки може зайняти 1-2 дні</p>"+
                "<p>Очікуйте дзвінка для детального обговорення замовлення<p>" +
                "</div></div></body></html>";
        return message;
    }
//    public void sendToClient(CustomerRequest request) throws Exception{
//
//        MimeMessage mimeMessage = mailSender.createMimeMessage();
//        MimeMessageHelper helper;
//
//        try {
//            helper = new MimeMessageHelper(mimeMessage, true,"UTF-8");
//            helper.setFrom(new InternetAddress(username, "Monovex", "UTF-8"));
//            helper.setTo(request.getEmail());
//            helper.setSubject("Заявка прийнята");
//            helper.setText(formatClientMessage(), true);
//
//        } catch (MessagingException e) {
//            e.printStackTrace();
//        }
//        mailSender.send(mimeMessage);
//    }
//    public void sendToMonovex(CustomerRequest request) throws UnsupportedEncodingException {
//        MimeMessage mimeMessage = mailSender.createMimeMessage();
//        MimeMessageHelper helper;
//
//        try {
//            helper = new MimeMessageHelper(mimeMessage, true,"UTF-8");
//            helper.setFrom(new InternetAddress(username, "Monovex", "UTF-8"));
//            helper.setTo(username);
//            helper.setSubject("--MonovexStudio-- Конгратюлейшн уйобкі");
//            helper.setText(formatAdminMessage(request), true);
//
//        } catch (MessagingException e) {
//            e.printStackTrace();
//        }
//        mailSender.send(mimeMessage);
//    }

    private SendGrid sendGridClient;
    private String monovexEmail = "monovex.studio@gmail.com";

    public EmailSenderService(SendGrid sendGridClient) {
        this.sendGridClient = sendGridClient;

    }
private Mail formatUserMail(CustomerRequest customerRequest){
    Mail mail = new Mail(new Email(monovexEmail), "Заявка прийнята", new Email(customerRequest.getEmail()),
            new Content("text/html", formatClientMessage()));
    return mail;
}
private Mail formatAdminMail(CustomerRequest customerRequest){
        Mail mail = new Mail(new Email(monovexEmail), "--MonovexStudio-- Конгратюлейшн уйобкі", new Email(monovexEmail),
                new Content("text/html", formatAdminMessage(customerRequest)));
        return mail;
    }
    private void setEmail(Mail mail) {
        Request request = new Request();
        Response response = null;
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            this.sendGridClient.api(request);
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
    public void sendEmail(CustomerRequest request){
        setEmail(formatAdminMail(request));
        setEmail(formatUserMail(request));
    }
//    public void sendMail(CustomerRequest request) throws IOException {
//        Email from = new Email("");
//        String subject = "Sending with SendGrid is Fun";
//        Email to = new Email("vlshugai@gmail.com");
//        Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
//        Mail mail = new Mail(from, subject, to, content);
//
//        SendGrid sg = new SendGrid(System.getenv("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"));
//        Request mailRequest = new Request();
//        try {
//            mailRequest.setMethod(Method.POST);
//            mailRequest.setEndpoint("mail/send");
//            mailRequest.setBody(mail.build());
//            Response response = sg.api(mailRequest);
//            System.out.println(response.getStatusCode());
//            System.out.println(response.getBody());
//            System.out.println(response.getHeaders());
//        } catch (IOException ex) {
//            throw ex;
//        }
//    }

}
