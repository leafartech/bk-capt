'use client'
import { useEffect } from 'react'

import Image from 'next/image'
import Section from '@/components/Section';
import MySwiper from '@/components/MySwiper';

export default function Home() {

  let cont = 0
  useEffect(() => {
    if (cont === 0) {
      const script = document.createElement('script');
      script.src = 'https://lauromts.activehosted.com/f/embed.php?id=27';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      document.body.appendChild(script);
      cont++;
    }
  }, []);

  return (
    <div className="bg-zinc-50">
      <header className="header relative min-h-screen sm:flex sm:justify-center border-b-2 border-my2">
        <div className="sm:hidden absolute bg-black/40 w-full h-full z-10"></div>
        <Image
          src="/images/bg-sm.png"
          alt="Fundo de eletricista - Baskoki Energia"
          layout='fill'
          objectFit='cover'
          className="sm:hidden"
        />
        <Image
          src="/images/bg-lg.png"
          alt="Fundo de eletricista - Baskoki Energia"
          layout='fill'
          objectFit='cover'
          className="hidden sm:block"
        />
        <div className="absolute sm:w-full sm:max-w-7xl h-full flex items-center justify-start px-4 z-20">
          <Image
            src="/images/logo-black.png"
            alt="Logo Baskoki Energia"
            width={160}
            height={74}
            className="hidden sm:block absolute top-0"
          />
          <Image
            src="/images/logo-white.png"
            alt="Logo Baskoki Energia"
            width={160}
            height={74}
            className="sm:hidden absolute top-0"
          />
          <div className="flex flex-col items-start justify-start sm:max-w-lg">
            <h4 className="flex items-center text-my font-bold tracking-wide text-xs sm:text-base relative sm:ps-[52px] sm:before:absolute sm:before:w-[40px] sm:before:bg-my sm:before:h-[3px] sm:before:rounded-full sm:before:left-0">EXCLUSIVO PARA PRESTADORES DE SERVIÇO</h4>
            <h1 className="text-white sm:text-my2  font-bold text-2xl sm:text-4xl my-3">Sua Fonte de Produtos Elétricos com Entrega Imediata em Todo o Brasil!</h1>
            <p className="text-zinc-300 sm:text-zinc-600 text-base mb-3">Cadastre-se abaixo para entrar na nossa lista vip e receber ofertas especiais de produtos a pronta entrega no whatsapp</p>
            <div className="_form_27 w-full sm:max-w-sm"></div>
          </div>
        </div>
      </header>
      <main className="mt-12 px-4 sm:px-0">
        <Section>
          <h2 className="text-2xl font-bold">Produtos a pronta entrega</h2>
          <MySwiper />
        </Section>
        <Section className="mt-12">
          <h2 className="text-2xl font-bold">Sobre a Baskoki Energia</h2>
          <div className="flex flex-col gap-3 max-w-5xl mt-8">
            <p className="text-zinc-600 text-lg">A Baskoki Energia nasceu em Imbituva no ano de 1991, atendendo toda região com material e serviço de alta qualidade para satisfação dos clientes.</p>
            <p className="text-zinc-600 text-lg">Hoje atendemos todo o Brasil com produtos de máxima a de pronta entrega.</p>
            <p className="text-zinc-600 text-lg">Trabalhamos com todo o setor de motores elétricos de corrente alternada de baixa tensão e revenda autorizada das marcas WEG, Eberle e Marathon</p>
            <p className="text-zinc-600 text-lg">Atendemos o setor de bombeamento de água potável entre outros, com a linha de motobombas SCHNEIDER, FAMAC e a linha de motobombas para hidromassagem, piscinas e filtros da marca DANCOR.</p>
            <p className="text-zinc-600 text-lg">Contamos também com compressores industriais e hobby da marca SCHULZ que é lider em compressores. E também uma linha exclusiva de compressores odontológicos da SCHUSTER.</p>
            <p className="text-zinc-600 text-lg font-medium">Desde 1991 transformando energia em solução!</p>
          </div>
        </Section>
        <div className="relative w-full h-[424px] mt-8">
          <Image
            src="/images/bg-lg2.png"
            alt="Baskoski Energia - Espaço físico"
            objectFit='cover'
            layout='fill'
            className="hidden sm:block rounded-md sm:rounded-none"
          />
          <Image
            src="/images/bg-sm2.png"
            alt="Baskoski Energia - Espaço físico"
            objectFit='cover'
            layout='fill'
            className="sm:hidden rounded-md sm:rounded-none"
          />
        </div>
      </main>
    </div>
  )
}