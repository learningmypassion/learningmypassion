import Link from "next/link";

export default function Header() {
    return(
        <div>
        <ul className="flex gap-6 bg-pink-200  vertical text-3xl      font-bold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>     
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/country">Country</Link></li>
        <li><Link href="/[country]">Dynamic Country</Link></li>
        </ul>
        </div>
    )
}
