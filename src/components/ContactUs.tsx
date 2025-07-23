import Button from "./Button";

export default function QnA() {
  return (
    <div className="container-custom mx-auto my-30 px-20">
      <div className="bg-black text-white p-10 rounded-lg flex gap-5 jusitfy-between items-between">
        <div className="flex flex-col gap-3">
          <p className="text-3xl">Ready to find your flow ?</p>
          <p>
            Join a community of driven professionals built for focus,
            flexibility, and real, connection.<br></br> Your desk is waiting
          </p>
          <div>
            <Button type="lg">Contact us</Button>
          </div>
        </div>
        <div className="ml-30">
            <div>500 Mbps Wi-Fi</div>
            <div>24/7 Access</div>
            <div>Meeting Rooms</div>
            <div>Wrgonomic Chairs</div>


        </div>
      </div>
    </div>
  );
}
