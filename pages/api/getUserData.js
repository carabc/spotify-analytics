import { getUserData } from "@/lib/spotty";
import { getServerSession } from "next-auth/next";
import authOptions from "./auth/[...nextauth]";

export default async function userData(req, res) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log("THIS IS THE SESSION: ", session);

    return res.status(200).send("okie");
  }
  console.log(2);
  console.log(2);
  console.log(2);
  console.log(2);
}
