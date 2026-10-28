import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from '../components/Header';
export const metadata: Metadata = { title:{default:'Medical Insights | Private Blog Preview',template:'%s | Medical Insights'}, description:'Medical article preview website.', robots:{index:false,follow:false,noarchive:true,noimageindex:true,googleBot:{index:false,follow:false,noimageindex:true}} };
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header/><div id="main-content">{children}</div><footer className="footer"><div className="shell footer-inner"><div><strong>Medical Insights</strong><p>A clearer view of your healthcare journey.</p></div><div><Link href="/blogs">Browse the library →</Link><p>Editorial preview · Specialist review pending</p><small>Educational information. Follow your treating team's advice.</small></div></div></footer></body></html>}
