import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject } = await req.json();

    if (!name || !email || !subject) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: "Filipe Torres <onboarding@resend.dev>", 
      to: ["felipetorres2405@gmail.com"], 
      subject: `Contato de ${name}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Assunto:</strong> ${subject}</p>`,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
