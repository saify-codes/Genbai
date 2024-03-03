import { GoSearch } from "react-icons/go";

export default function () {
  return <div className="hidden rounded md:flex items-center border mr-auto">
    <GoSearch className="mx-2"/>
    <input className="h-8 outline-none" type="text" placeholder="search"/>
  </div>
}
