import {

TriangleAlert,

CloudRain,

Car,

ShieldAlert

} from "lucide-react";

const alerts=[

{

icon:<TriangleAlert className="text-red-500"/>,

title:"Accident Ahead",

time:"2 mins ago"

},

{

icon:<CloudRain className="text-cyan-400"/>,

title:"Heavy Rain Expected",

time:"15 mins"

},

{

icon:<Car className="text-yellow-400"/>,

title:"Traffic Increasing",

time:"Live"

},

{

icon:<ShieldAlert className="text-green-400"/>,

title:"Road Safe",

time:"Current"

}

]

function AlertPanel(){

return(

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

<h2 className="text-white text-xl font-bold">

⚠ Live Alerts

</h2>

<div className="space-y-4 mt-6">

{

alerts.map((alert,index)=>(

<div

key={index}

className="bg-slate-800 rounded-xl p-4 flex justify-between"

>

<div className="flex gap-4">

{alert.icon}

<div>

<p className="text-white">

{alert.title}

</p>

<p className="text-slate-400 text-sm">

{alert.time}

</p>

</div>

</div>

</div>

))

}

</div>

</div>

)

}

export default AlertPanel;