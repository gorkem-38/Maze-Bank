const test = () => {
    let currSold = -50;
    let overDraft = -50;
    if (currSold < overDraft){
        console.log(("retrait impossible"));
    } else {
        console.log("retrait possible");
    };
};

export default test;