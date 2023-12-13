import { Input } from "../components/input";
import { IconSearch } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Nav = () => {
    const navigate = useNavigate();

    const gotoHome = useCallback(() => {
        navigate('/overview');
    }, [navigate])

    return (
        <div className="fixed top-0 bg-white z-20 px-32 w-full h-24 flex justify-between">
            <div className="flex my-auto items-center gap-x-22.5">
                <div className="text-2xl text-midblack font-extrabold cursor-pointer" onClick={gotoHome}>ACE ACADEMY</div>
                <Input className="w-101" type="rounded" placeholder="Search courses, skills, teachers" icon={<IconSearch />} />
            </div>
            <div className="flex my-auto items-center gap-x-12.5">
                <div className="flex gap-x-5 text-midblack font-extrabold">
                    <span className="cursor-pointer">All courses</span>
                    <span className="cursor-pointer">My courses</span>
                </div>
            </div>
        </div>
    )
}

export default Nav