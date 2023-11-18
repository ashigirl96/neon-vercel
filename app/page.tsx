import Image from 'next/image'
import {getOsArch} from "@/backend/get-os-arch";

export default async function Home() {
  const osArch = getOsArch()
  return (
    <div>os-arch: {osArch}</div>
  )
}
