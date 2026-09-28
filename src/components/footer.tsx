import Link from "next/link";
import { Logo } from "@/components/logo";
import { brokerDisclosure, company, footerLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            Commercial finance for UK businesses, matched to the shape and pace of yours.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-aqua">Explore</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="py-1 text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-aqua">Contact</h2>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p>{company.email}</p>
            <p>{company.phoneDisplay}</p>
            <p>{company.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell py-8">
          <p className="max-w-5xl text-xs leading-6 text-white/55">{brokerDisclosure}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/55">
            <span>© {new Date().getFullYear()} Float</span>
            <span>{company.companyNumber}</span>
            <span>{company.icoNumber}</span>
            <Link href="/privacy" className="py-1.5 hover:text-white">Privacy</Link>
            <Link href="/cookies" className="py-1.5 hover:text-white">Cookies</Link>
            <Link href="/terms" className="py-1.5 hover:text-white">Terms</Link>
            <Link href="/complaints" className="py-1.5 hover:text-white">Complaints</Link>
            <Link href="/commission-disclosure" className="py-1.5 hover:text-white">Commission disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
