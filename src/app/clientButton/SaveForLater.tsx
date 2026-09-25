"use client"
import { useContext, useState } from 'react'
import { DataContext } from '../context/CardContext';
import { Type } from '../types/type';
import { toast } from 'react-toastify';

const SaveForLater = ({ data }: { data: Type }) => {
    // const { addToCard, setAddToCard } = useContext(DataContext);
    const { saveForLater, setSaveForLater } = useContext(DataContext);

    const [added, setAdded] = useState(false);

    const SaveForlater = () => {
        const alreadyAdded = saveForLater.some(
            (item: Type) => item.id === data.id
        );

        if (alreadyAdded) {
            toast.warning("This workout is already added!");
            return;
        }

        setSaveForLater([...saveForLater, data]);

        setAdded(true);

        toast.success("Workout added successfully!");
    };
    return (
        <button
            onClick={SaveForlater}
            className={`flex-1 ${added
                    ? "bg-[#94ea0a] hover:bg-[#b3e600]"
                    : "bg-[#ff2b2b] hover:bg-[#ff4d4d]"
                } text-black font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer text-sm`}
        >
            {added ? "Added ✓" : "Save for Later"}
        </button>
    )
}

export default SaveForLater
