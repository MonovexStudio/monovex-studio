package com.monovexstudio.monovex.service;

import com.monovexstudio.monovex.dto.request.CustomerRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String username;

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
        // let lastMessage = "Тип послуги: " + this.state.checkedItems.serviceType +
        //   "\nВид сайту: " + this.state.checkedItems.siteType +
        //   "\nСума на розробку сайта: "+ this.state.checkedItems.price +
        //   "\nДедлайн: "+ this.state.checkedItems.deadline +
        //   "\nПІБ: "+ this.state.checkedItems.credentials +
        //   "\nПриклад роботи яка подобається: "+ this.state.checkedItems.workExample +
        //   "\nТематика сайту: "+ this.state.checkedItems.siteTheme +
        //   "\nМісто: "+ this.state.checkedItems.city +
        //   "\nНомер телефону: "+ this.state.checkedItems.phoneNumber +
        //   "\ne-mail: "+ this.state.checkedItems.email;
        return message;
    }
    public void sendToMonovex(CustomerRequest request) throws UnsupportedEncodingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper;

        try {
            helper = new MimeMessageHelper(mimeMessage, true,"UTF-8");
            helper.setFrom(new InternetAddress(username, "Monovex", "UTF-8"));
            helper.setTo(username);
            helper.setSubject("--MonovexStudio-- Конгратюлейшн уйобкі");
            helper.setText(formatAdminMessage(request), true);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
        mailSender.send(mimeMessage);
    }
}
