import Link from "next/link";
import { RouteTransition } from "@/components/RouteTransition";

export default function SupportPage(){
    return(
        <div className="flex flex-col items-center justify-center">
            <RouteTransition>
            <br />
            <section className="flex flex-col items-center justify-center">
            <h1 className="font-bold font-mono text-center text-2xl">Support page.</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m0 0l-3.75-3.75M12 19.5l3.75-3.75M4.5 12h15m0 0l-3.75 3.75M19.5 12L15.75 8.25" />
                </svg>
                <p className="">If you need a help with using this website, or you have went to troubles, <br/> please use credentials below to contact with support or developer(s).</p>
            </section>
            <section className="flex flex-col items-center justify-center">
                <p className="font-bold">Developer(s)</p>
                
                <Link href="https://github.com/sudoer95" target="_blank"><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>Github: @sudoer95</p></Link>
                <Link href="https://t.me/plantinor" target="_blank"><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>Telegram: @plantinor</p></Link>
                <p className="font-bold">Support</p>
                <Link href="https://wa.me/+996706154451" target="_blank"><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline lucide lucide-message-circle-more-icon lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>WhatsApp: +996706154451</p></Link>
                <Link href="https://t.me/sudoer95" target="_blank"><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>Telegram: @sudoer95</p></Link>
            </section>
            </RouteTransition>
        </div>
    );
}