import Link from "next/link"

export default function Success() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
       <span className="text-green-600 text-lg">Submission successful!</span>
       
       <span className="text-gray-800 pt-3 text-base">I will get in touch as soon as possible.</span>
     
       <Link href="/">
         <a className="text-blue-800 pt-6">&late; Go back home</a>
       </Link>
    </div>
  )
}
