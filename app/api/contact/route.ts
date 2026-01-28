  import { Resend } from "resend";
  import { NextResponse } from "next/server";

  const resend = new Resend(process.env.RESEND_API_KEY);

  export  async function POST(req: Request) {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      replyTo: email,
      to: "contatojoabyson@gmail.com",
      subject: `Contato do site - ${name}`,
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  }
