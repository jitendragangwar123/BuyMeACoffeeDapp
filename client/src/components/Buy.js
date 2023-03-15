const ethers = require("ethers");
const Buy=({state})=>{
    const buyChai=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;
        console.log(name,message,contract);
        const amount={value:ethers.utils.parseEther("0.001")};
        const transaction=await contract.buyChai(name,message,amount);
        await transaction.wait();
        console.log("Transaction is Completed!");
    };
    return(
    <>
      <div class="container-md" style={{ width: "50%",padding: 20}}>
        <form onSubmit={buyChai}>
            <div className="mb-3">
                <lable for="formGroupExampleInput" className="form-label">Name</lable>
                <input type="text" className="form-control" id="name" placeholder="Enter your Name"/>
            </div>
            <div className="mb-3">
                <lable for="formGroupExampleInput2" className="form-label">Message</lable>
                <input type="text" className="form-control" id="message" placeholder="Enter your Message"/>
            </div>

            <button type="submit" className="btn btn-primary"
            disabled={!state.contract}>Pay</button>
        </form>
    </div>
    </>
    );
}
export default Buy;