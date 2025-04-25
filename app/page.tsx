import Image from "next/image";
import Link from "next/link";
import Patrocinadores from "./adds/patrocinadores";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/bg-home.webp')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center gap-4">
        <Image
          src="/logo.webp"
          alt="Os Guerreiros"
          width={300}
          height={300}
        />
        <p className="max-w-[60%]"><strong className="text-osg-orange font-bold">Os Guerreiros</strong> é uma rede de criadores de conteúdo com foco no mundo dos games e jogos eletrônicos. Nosso objetivo é conectar criadores de conteúdo, espectadores e patrocinadores, formando assim um ambiente em que todos possam contribuir e se ajudar.</p>
        <div className="flex flex-wrap gap-4 mt-12 pt-8 justify-center">
            <Link href="https://osg.cx/equipe-osguerreiros" target="_blank">
          <Image
            src="/btn-team-osguerreiros.gif"
            width={250}
            height={150}
            alt="Team Os Guerreiros"
            className="w-full max-w-xs"
            unoptimized
          />
            </Link>
            <Link href="https://osg.cx/equipe-academia" target="_blank">
          <Image
            src="/btn-team-academia.gif"
            width={250}
            height={150}
            alt="Team Academia"
            className="w-full max-w-xs"
            unoptimized
          />
            </Link>
          </div>
        <Patrocinadores />
      </div>
      <div className="flex flex-col items-center justify-center text-center p-8 min-h-screen">
        <h1 className="text-osg-orange font-bold text-4xl">LINKS</h1>
        <ul className="flex flex-col gap-4 mt-4">
          <Link href="https://osguerreiros.com/" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">SITE</Link>
          <Link href="https://osg.cx/estatuto" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">ESTATUTO</Link>
          <Link href="https://osg.cx/em-breve/" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">MIDIA KIT</Link>
          <Link href="https://osg.cx/identidade-visual-osg" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">IDENTIDADE VISUAL</Link>
          <Link href="https://osg.cx/discord" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">DISCORD PRINCIPAL</Link>
          <Link href="https://osg.cx/discord-recrutamento" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">DISCORD RECRUTAMENTO</Link>
          <Link href="https://osg.cx/whatsapp" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">GRUPO NO WHATSAPP</Link>
          <Link href="https://osg.cx/instagram" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">INSTAGRAM</Link>
          <Link href="https://osg.cx/tiktok" target="_blank" className="bg-osg-orange/60 p-2 font-bold rounded-md transition-all hover:scale-105 hover:bg-osg-orange/100 hover:text-black">TIKTOK</Link>
        </ul>
      </div>
      <div className="bg-[url('/bg-sobre.webp')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
        <div className="md:max-w-[80%] flex flex-col items-center gap-4 justify-center p-4 m-auto">
            <h1 className="text-osg-orange font-bold text-4xl">CONTATO</h1>
            <div className="flex flex-col gap-4 items-center justify-center bg-osg-orange/45 rounded-lg p-4 w-full md:w-1/2">
                <h1 className='text-3xl font-bold'>Fale conosco</h1>
                <p>Para qualquer dúvida, utilize os canais abaixo para saná-las:</p>
                <p><strong>Discord:</strong> Abra um ticket em nosso Discord <Link href="https://osg.cx/discord" className='text-osg-orange underline'>https://osg.cx/discord.</Link> ficaremos felizes em atende-los de segunda a sexta em horário comercial.</p>
                <p><strong>E-mail:</strong> Envie suas perguntas para os e-mails abaixo que responderemos o mais rápido possível de <strong className='underline'>segunda a sexta em horário comercial.</strong></p>
                <ul className='list-disc'>
                    <li><strong>Diretoria:</strong> diretoria@osguerreiros.com</li>
                    <li><strong>RH:</strong> rh@osguerreiros.com</li>
                    <li><strong>Comercial:</strong> comercial@osguerreiros.com</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center bg-osg-orange/45 rounded-lg p-4 w-full md:w-1/2">
                <h1 className='text-3xl font-bold'>Administração</h1>
                <ul className='flex flex-col justify-center'>
                    <h2 className='text-xl font-bold text-center'>Direção</h2>
                    <li><strong>CEO:</strong> Bruno Felipe</li>
                    <li><strong>Discord:</strong> osg_bfshow</li>
                    <li><strong>E-mail:</strong> bfshow@osguerreiros.com</li>
                </ul>
                <ul className='flex flex-col justify-center'>
                    <h2 className='text-xl font-bold text-center'>HeadStaff</h2>
                    <li><strong>CCO & CTO:</strong> Vanderlei Ribeiro</li>
                    <li><strong>Discord:</strong> alost</li>
                    <li><strong>E-mail:</strong> alost@osguerreiros.com</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
}
