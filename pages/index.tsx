import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Card from '@/components/Card';
import CardList from '@/components/CardList';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="overflow-hidden w-full bg-white">
        <Header />
        <Card />
        <CardList />
        <Map />
        <Footer />
      </main>
    </>
  );
}
