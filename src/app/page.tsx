import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { CounterData } from "@/components/CounterData";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { ControlBilling } from "@/components/ControlBilling";
import { Testimonials } from "@/components/Testimonials/Testimonials";



export default function Home() {
  return (
    <>
     <Header />
    <FirstBlock />
    <CounterData/>
    <BestBusiness />
    <ChooseYourCards />
    <ControlBilling />
    <Testimonials />
    <PaymentsMethods />
    <Footer />
    </>
  )
}
