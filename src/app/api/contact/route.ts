import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Form doğrulama
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "İsim, e-posta ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    // E-posta gönderici yapılandırması
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail kullanıyoruz, başka servisler de kullanılabilir
      auth: {
        user: process.env.EMAIL_USER, // .env dosyasından e-posta adresi
        pass: process.env.EMAIL_PASS, // .env dosyasından uygulama şifresi
      },
    });

    // E-posta içeriği
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kelessoftware@gmail.com", // Alıcı e-posta adresi
      subject: `Keles Software - İletişim Formu: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>İsim:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || "Belirtilmemiş"}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0; color: #555;">Mesaj:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
            Bu e-posta Kele Software web sitesindeki iletişim formundan gönderilmiştir.
          </p>
        </div>
      `,
    };

    // E-posta gönderimi
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-posta gönderimi sırasında hata:", error);
    return NextResponse.json(
      { error: "E-posta gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
