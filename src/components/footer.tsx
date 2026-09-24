import Link from "next/link";
import { Logo } from "@/components/logo";
import { brokerDisclosure, company, navigation } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            Practical commercial finance, matched to the shape and pace of your business.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-aqua">Explore</h2>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
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
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookies</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
