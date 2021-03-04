
//not used
function updateClockSingle(){
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    setInterval(() => {
        let day = new Date();

            let hh = day.getHours() * 30;
            hr.style.transform = `rotateZ(${hh}deg)`;

            let mm = day.getMinutes() * deg;

            mn.style.transform = `rotateZ(${mm}deg)`;
    })
}
function init(){
    const num = document.querySelectorAll("#num1");
    num.forEach(element => {
        element.innerHTML = "";
        for(i=0; i<=5; i++){
            element.innerHTML += 
            `
            <div class="clock">
                <div class="hour">
                    <div class="hr" id="hr"></div>
                </div>
                <div class="min">
                    <div class="mn" id="mn"></div>
                </div>
            </div>
            `;
        }
    });
    getTimes();
}




function getTimes(){
    setInterval(() => {
    let day = new Date();
    let time = day.toLocaleTimeString();

    let h1 = time.substr(0,1);
    let h2 = time.substr(1,1);

    let m1 = time.substr(3,1);
    let m2 = time.substr(4,1);

    let nums = [[],[],[],[]];
    
    nums[0] = getPointer(h1);
    nums[1] = getPointer(h2);
    nums[2] = getPointer(m1);
    nums[3] = getPointer(m2);

    updateNum(nums);
    });
}


function updateNum(nums){
    const num = document.querySelectorAll("#num1");
        let j = 0;
    num.forEach (item => {
        const childs = item.childNodes;
        let i = 0;
        childs.forEach(element => {
            if (element.className == "clock" ){
    
                let hour = element.childNodes.item(1);
                let hr = hour.childNodes.item(1);
                hr.style.transform = `rotateZ(${nums[j][i] * 45}deg)`;
        
                let min = element.childNodes.item(3);
                let mn = min.childNodes.item(1);
                mn.style.transform = `rotateZ(${nums[j][i+1] * 45}deg)`;
                i += 2;
            }
            });
        j++;
    })

    
}

function getPointer(num){
    let nums;
    switch (num){
        case "1":
            return [5,5, 5,4, 5,5, 0,4, 5,5, 0,0];
        case "2":
            return [2,2, 6,4, 2,4, 0,6, 0,2, 6,6];
        case "3":
            return [2,2, 6,4, 2,2, 0,6, 2,2, 0,6];
        case "4":
            return [4,4, 4,4, 0,2, 0,4, 5,5, 0,0];
        case "5":
            return [4,2, 6,6, 0,2, 6,4, 2,2, 6,0];
        case "6":
            return [4,2, 6,6, 0,4, 6,4, 0,2, 6,0];
        case "7":
            return [2,2, 6,4, 5,5, 0,4, 5,5, 0,0];
        case "8":
            return [2,4, 6,4, 0,3, 4,7, 0,2, 0,6];
        case "9":
            return [2,4, 6,4, 0,2, 0,4, 2,2, 0,6];
        case "0":
            return [2,4, 6,4, 0,4, 0,4, 0,2, 0,6];
    }
}