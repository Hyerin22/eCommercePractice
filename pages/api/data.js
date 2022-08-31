import ax from "axios";
import { goToPage } from "../../utils/func";

export default async function handler(req, res){
  const acnhList = await ax.get("https://dummyjson.com/products");

  var lists = [];
  
  const numDevices = lists.length;

  if(req.query.page){
    const numresults = req.query.num;
    lists = goToPage(req.query.page, lists, numresults);
  }

  res.status(200).json({ lists, numDevices });
}