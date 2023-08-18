const Frame = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-[19.69px] text-white font-mukta">
      <section
        className="self-stretch bg-white flex flex-row pt-0 px-0 pb-[55px] items-center justify-between z-[0] text-left text-[15.08px] text-midnightblue font-mukta mq1024:items-start mq1024:justify-start mq1024:pt-0 mq1024:box-border mq744:flex-row mq390:flex-col"
        id="hero"
      >
        <img
          className="max-h-full w-[522px] lg:w-[430px] md:w-[367px] mq1024:w-[300px] mq744:w-[250px] mq744:flex-row mq744:pt-0 mq744:box-border mq390:w-[250px]"
          alt=""
          src="/icon-graphic.svg"
        />
        <div className="w-[600px] flex flex-col items-start justify-start gap-[23px] lg:w-[534px] mq1024:w-[400px] mq1024:flex-col mq1024:items-start mq1024:justify-start mq1024:pl-[50px] mq1024:pt-[70px] mq1024:pr-0 mq1024:box-border mq744:w-[400px] mq744:flex-col mq744:pt-[70px] mq744:box-border mq390:self-stretch mq390:w-auto mq390:gap-[23px] mq390:pt-[30px] mq390:box-border">
          <div className="flex flex-row items-center justify-start text-darkorange font-inter mq1024:items-center mq1024:justify-start mq1024:pt-0 mq1024:box-border mq744:self-stretch mq744:w-auto mq744:pt-0 mq744:box-border">
            <div className="relative tracking-[0.08em] font-black">
              Introducing
            </div>
          </div>
          <b className="relative text-[55.37px] leading-[107.7%] inline-block w-[482px] mq1024:text-21xl mq1024:w-[350px] mq390:self-stretch mq390:w-auto">
            A fairer, more transparent financial system.
          </b>
          <div className="flex flex-row items-start justify-start gap-[21px] text-sm mq1024:flex-col mq744:flex-col mq390:flex-col">
            <button className="cursor-pointer [border:none] p-2.5 bg-darkorange rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[173px] flex flex-row box-border items-center justify-center">
              <b className="relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue text-left">
                Launch App
              </b>
            </button>
            <div className="flex flex-row items-start justify-start gap-[21px]">
              <img
                className="relative w-[7.36px] h-[214.39px]"
                alt=""
                src="/vector-59.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[3px]">
                <div className="relative leading-[130.7%] inline-block w-[215px]">
                  <p className="m-0">
                    Valantis is a decentralized protocol designed to make it
                    easier to create, combine and optimize AMM’s without
                    fragmenting liquidity or paying high gas fees.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[13px] text-[15.08px] font-inter">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative tracking-[0.08em] font-black">
                      Read the white paper
                    </div>
                  </div>
                  <img
                    className="relative w-[21px] h-[9.23px]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-0 mx-[!important] absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-5 px-10 box-border items-center justify-between z-[1]">
        <img
          className="relative w-[255px] h-[43px] overflow-hidden shrink-0 mq1024:w-[200px] mq744:w-[150px]"
          alt=""
          src="/valantis-logo.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[97px] lg:hidden md:hidden">
          <div className="w-[268px] flex flex-row items-start justify-start gap-[32px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue text-left inline-block">
              TRADE
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue text-left inline-block">
              POOLS
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[9px]">
              <div className="relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue text-left">
                DOCS
              </div>
              <img
                className="relative w-[12.85px] h-[12.85px]"
                alt=""
                src="/vector-94.svg"
              />
            </button>
          </div>
          <div className="rounded-8xs bg-midnightblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[188px] flex flex-row p-2.5 box-border items-center justify-center">
            <b className="relative tracking-[0.07em]">Connect Wallet</b>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-col items-start justify-start gap-[7px] lg:flex md:flex">
          <div className="relative bg-midnightblue w-5 h-0.5" />
          <div className="relative bg-midnightblue w-5 h-0.5" />
          <div className="relative bg-midnightblue w-3.5 h-0.5" />
        </button>
      </div>
      <div className="self-stretch bg-whitesmoke flex flex-row items-center justify-center z-[2] text-[15.08px] text-darkorange font-inter mq744:flex-col mq390:flex-col">
        <div className="flex-1 box-border h-[180px] flex flex-col items-center justify-center gap-[6px] border-[4px] border-solid border-midnightblue mq744:flex-[unset] mq744:self-stretch mq390:flex-[unset] mq390:self-stretch">
          <div className="relative tracking-[0.08em] font-black">
            Total Value Locked
          </div>
          <b className="relative text-46xl tracking-[0.08em] font-mukta text-midnightblue mq1024:text-26xl">
            $267.49b
          </b>
        </div>
        <div className="flex-1 box-border h-[180px] flex flex-col items-center justify-center gap-[7px] ml-[-3px] border-[4px] border-solid border-midnightblue mq744:flex-[unset] mq744:self-stretch mq390:flex-[unset] mq390:self-stretch">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[0.08em] font-black">
              Total Volume
            </div>
          </div>
          <b className="relative text-46xl tracking-[0.08em] font-mukta text-midnightblue mq1024:text-26xl">
            50k
          </b>
        </div>
        <div className="flex-1 box-border h-[180px] flex flex-col items-center justify-center gap-[7px] ml-[-3px] border-[4px] border-solid border-midnightblue mq744:flex-[unset] mq744:self-stretch mq390:flex-[unset] mq390:self-stretch">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[0.08em] font-black">
              Total Fees
            </div>
          </div>
          <b className="relative text-46xl tracking-[0.08em] font-mukta text-midnightblue mq1024:text-26xl">
            $71.50k
          </b>
        </div>
      </div>
    </div>
  );
};

export default Frame;
