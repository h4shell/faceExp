let config = {
    status:"neutral",
    color:"red"
}

if (config.color == "green"){
    config.color = "rgba(0,255,0,1)"
} else if (config.color == "blue"){
    config.color = "rgba(0,0,255,1)"
} else {
    config.color = "rgba(255,0,0,1)"
}

export default config

