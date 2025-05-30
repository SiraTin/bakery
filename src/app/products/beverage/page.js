import Footer from "@/app/layouts/footer";
import Navbar from "@/app/layouts/navbar";
import BeverageSecOne from "./components/section-one";
import BeverageMenu from "./components/section-two";

export const metadata = {
    title: "Bakery House` - Products Beverage",
    description: "Generated by create next app",
  };


export default function Beveragepage(){
    const pageId = 2;

    return (
        <>
            <Navbar pageId={pageId}/>
            <main className="w-full min-h-screen bg-white">
                <BeverageSecOne/>
                <BeverageMenu/>
            </main>
            <Footer/>
        </>
    );
}