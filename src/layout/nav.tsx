import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { IconSearch } from "../assets/icons";
import { Avatar } from "../components/avatar";
import { UserAvatar } from "../assets/imgs";

const Nav = () => {
    const navigate = useNavigate()

    const gotoHome = useCallback(() => {
        navigate('/overview')
    }, [navigate])

    const gotoAllCourses = useCallback(() => {
        navigate('/all-courses')
    }, [navigate])

    return (
        <div className="fixed top-0 bg-white z-20 px-32 w-full h-24 flex justify-between">
            <div className="flex my-auto items-center gap-x-22.5">
                <div className="text-2xl text-midblack font-extrabold cursor-pointer" onClick={gotoHome}>ACE ACADEMY</div>
                <Input className="w-101" type="rounded" placeholder="Search courses, skills, teachers" icon={<IconSearch />} />
            </div>
            <div className="flex my-auto items-center gap-x-12.5">
                <div className="flex gap-x-5 text-midblack font-extrabold">
                    <span className="cursor-pointer" onClick={gotoAllCourses}>All courses</span>
                    <span className="cursor-pointer">My courses</span>
                </div>
                <div>
                    <Avatar img={UserAvatar} status="online" />
                </div>
            </div>
        </div>
    )
}

export default Nav