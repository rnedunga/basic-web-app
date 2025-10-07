export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("what is your andrew id")) {
    return (
      "rnedunga"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "blackbird2";
  }

  if (query.toLowerCase().includes("largest")) {
    let arr = query.substring(query.indexOf(":")+1, query.indexOf("?")).split(",");
    return Math.max(parseInt(arr[0]), Math.max(parseInt(arr[1]), parseInt(arr[2]))).toString();
  }

  if (query.toLowerCase().includes("plus")) {
    let arr = query.split("plus");
    return (parseInt(arr[0]) + parseInt(arr[1])).toString();
  }


  return "";
}
