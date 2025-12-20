import axios from "axios";

async function getUserData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3 seconds delay
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data;
  
}
// async component
export default async function Home() {
  const userData = await getUserData(); 
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}
