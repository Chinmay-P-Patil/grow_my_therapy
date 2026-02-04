"use client"
import { useState } from "react";
const navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
        <div className="hidden text-4xl px-15 py-4 lg:flex justify-between h-20 border-b-2 max-sm:invisible max-sm:fixed">
            
                <a href="/" className="fade">Dr. Maya Reynolds</a>
            <div className=" font-light text-xl pt-3 flex gap-10">
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
            </div>
        </div>

      <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b">
        <button onClick={() => setMenuOpen(true)} className="text-2xl">☰</button>
        <div className="text-xl font-medium">Dr. Maya Reynolds</div>
        <div className="w-6" />
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f7f3ee] flex flex-col">
          <div className="flex justify-between items-center px-4 py-4">
            <button onClick={() => setMenuOpen(false)} className="text-2xl">✕</button>
            <div className="text-xl font-medium">Dr. Maya Reynolds</div>
            <div className="w-6" />
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-10 text-2xl">
            <a href="/" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="/" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
      </>
    );
}
export default navbar;