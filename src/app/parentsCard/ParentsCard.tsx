import ShowAllCards from "../components/navber/ShowAllCards"
import { Type } from "../types/type"

const getData = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
        return response.json()
    } catch (error) {
        alert('fetching data is fail')
    } finally {
        console.log('finish')
    }
}
const ParentsCard = async () => {
    const cardsData = await getData()
    console.log("cards data form parents", cardsData)
    return (
        <div className="bg-black py-4">

            <div className="max-w-[1100px] mx-auto">
                <h2 className=" text-4xl text-white mb-[10px]">THE LIBRARY</h2>
                <p className="capitalize text-gray-400 mb-[10px]">twelve lifts covering every major muscle group</p>
                <div className="grid grid-cols-3 gap-4">
                    {
                        cardsData.map((cardData: Type) => <ShowAllCards
                            key={cardData.id}
                            cardData={cardData}
                        ></ShowAllCards>)
                    }
                </div>
            </div>

        </div>
    )
}

export default ParentsCard
