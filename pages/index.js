import { useCallback } from "react";
import { useRouter } from "next/router";

const Default01 = () => {
  const router = useRouter();

  const onValantisImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTRADEClick = useCallback(() => {
    router.push("/trade");
  }, [router]);

  const onPOOLSClick = useCallback(() => {
    router.push("/pools");
  }, [router]);

  const onHamburgerMenuClick = useCallback(() => {
    router.push("/trade04");
  }, [router]);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-[15.08px] text-darkorange-100 font-inter">
      <section
        className="self-stretch bg-white flex flex-row pt-0 px-0 pb-[55px] items-center justify-between z-[0] text-left text-[15.08px] text-midnightblue-100 font-mukta mq1024:items-start mq1024:justify-start mq1024:pt-0 mq1024:box-border mq744:flex-row mq390:flex-col"
        id="hero"
      >
        <img
          className="max-h-full w-[522px] lg:w-[430px] md:w-[367px] mq1024:w-[300px] mq744:w-[250px] mq744:flex-row mq744:pt-0 mq744:box-border mq390:w-[250px]"
          alt=""
          src="/icon-graphic.svg"
        />
        <div className="w-[586px] flex flex-col items-start justify-start gap-[23px] lg:w-[534px] mq1024:w-[400px] mq1024:flex-col mq1024:items-start mq1024:justify-start mq1024:pl-[50px] mq1024:pt-[70px] mq1024:pr-0 mq1024:box-border mq744:w-[400px] mq744:flex-col mq744:pt-[70px] mq744:box-border mq390:self-stretch mq390:w-auto mq390:gap-[23px] mq390:items-start mq390:justify-start mq390:pt-[30px] mq390:box-border">
          <div className="flex flex-row items-center justify-start text-darkorange-100 font-inter mq1024:items-center mq1024:justify-start mq1024:pt-0 mq1024:box-border mq744:self-stretch mq744:w-auto mq744:pt-0 mq744:box-border">
            <div className="relative tracking-[0.08em] font-black">
              Introducing
            </div>
          </div>
          <div className="self-stretch flex flex-row py-0 pr-[140px] pl-0 items-start justify-start text-[55.37px] md:w-auto md:[align-self:unset] md:pr-2.5 md:box-border">
            <b className="flex-1 relative leading-[107.7%] mq1024:text-21xl mq1024:text-left mq390:text-left mq390:flex-1">
              A fairer, more transparent financial system.
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[21px] text-sm mq1024:flex-col mq744:flex-col mq390:flex-col mq390:items-start mq390:justify-start">
            <button className="cursor-pointer [border:none] p-2.5 bg-midnightblue-100 rounded-8xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row box-border items-center justify-center min-w-[150px]">
              <b className="relative text-[19.69px] tracking-[0.07em] font-mukta text-white text-left">
                Launch App
              </b>
            </button>
            <div className="flex flex-row py-0 pr-[100px] pl-0 items-start justify-start gap-[21px] mq1024:pr-5 mq1024:box-border mq390:pr-10 mq390:box-border">
              <img
                className="relative w-[7.36px] h-[214.39px]"
                alt=""
                src="/vector-59.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[30px] mq390:gap-[30px]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[130.7%]">
                    <p className="m-0">
                      Valantis is a decentralized protocol designed to make it
                      easier to create, combine and optimize AMM’s without
                      fragmenting liquidity or paying high gas fees.
                    </p>
                  </div>
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
      <div className="self-stretch bg-white flex flex-row items-center justify-center z-[1] mq744:flex-col mq390:flex-col">
        <div className="flex-1 box-border h-[180px] flex flex-col items-center justify-center gap-[6px] border-[4px] border-solid border-midnightblue-100 mq744:flex-[unset] mq744:self-stretch mq390:flex-[unset] mq390:self-stretch">
          <div className="relative tracking-[0.08em] font-black">
            Total Value Locked
          </div>
          <b className="relative text-46xl tracking-[0.08em] font-mukta text-midnightblue-100 mq1024:text-26xl">
            $267.49b
          </b>
        </div>
        <div className="flex-1 box-border h-[180px] flex flex-col items-center justify-center gap-[7px] ml-[-3px] border-[4px] border-solid border-midnightblue-100 mq744:flex-[unset] mq744:self-stretch mq390:flex-[unset] mq390:self-stretch">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[0.08em] font-black">
              Total Volume
            </div>
          </div>
          <b className="relative text-46xl tracking-[0.08em] font-mukta text-midnightblue-100 mq1024:text-26xl">
            50k
          </b>
        </div>
        <div className="flex-1 box-border h-[180px] flex flex-col items-center justify-center gap-[7px] ml-[-3px] border-[4px] border-solid border-midnightblue-100 mq744:flex-[unset] mq744:self-stretch mq390:flex-[unset] mq390:self-stretch">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[0.08em] font-black">
              Total Fees
            </div>
          </div>
          <b className="relative text-46xl tracking-[0.08em] font-mukta text-midnightblue-100 mq1024:text-26xl">
            $71.50k
          </b>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col py-[60px] px-20 items-center justify-start gap-[20px] z-[2] border-r-[4px] border-solid border-midnightblue-100 border-b-[4px] border-l-[4px] mq744:pb-[60px] mq744:box-border mq390:items-center mq390:justify-start mq390:pt-[30px] mq390:px-5 mq390:pb-[140px] mq390:box-border">
        <div className="flex flex-row items-center justify-start">
          <div className="relative tracking-[0.08em] font-black">Problem</div>
        </div>
        <b className="self-stretch relative text-21xl leading-[130.7%] font-mukta text-midnightblue-100 text-center mq744:text-11xl mq390:text-11xl mq390:text-left">
          The requirements of all the different liquidity providers (LPs) in the
          market making industry cannot be met by a single, monolithic DEX
          design.
        </b>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start z-[3] md:flex-col">
        <div className="flex-1 bg-white box-border h-[737px] overflow-hidden flex flex-row p-10 items-center justify-start gap-[67px] border-r-[4px] border-solid border-midnightblue-100 border-b-[4px] border-l-[4px] md:flex-[unset] md:self-stretch mq744:w-auto mq744:[align-self:unset] mq744:flex-1 mq744:min-w-[390px] mq744:max-h-[737px]">
          <div className="flex-1 flex flex-col py-0 px-2.5 items-start justify-start gap-[26px]">
            <div className="relative tracking-[0.08em] font-black">
              Solution
            </div>
            <b className="self-stretch relative text-21xl leading-[130.7%] font-mukta text-midnightblue-100">{`A flexible DEX design that supports the most sophisticated liquidity distribution `}</b>
          </div>
          <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 items-center justify-start gap-[17.76px]">
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-darkorange-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
            <div className="relative shadow-[0px_3.229081392288208px_3.23px_rgba(0,_0,_0,_0.25)] box-border w-[7.22px] h-[7.49px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[1.6px] border-dashed border-midnightblue-100" />
          </div>
        </div>
        <div className="flex-1 h-[737px] flex flex-col items-start justify-start text-white md:self-stretch md:w-auto md:h-auto md:flex-col md:flex-[unset] mq1024:flex-1 mq390:w-[643px]">
          <div className="self-stretch flex-1 bg-midnightblue-100 flex flex-row p-10 items-center justify-start gap-[60px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <b className="relative tracking-[0.08em]">Without</b>
              <b className="self-stretch relative text-21xl leading-[130.7%] inline-block font-mukta text-darkorange-100 h-[58px] shrink-0">
                High Gas Fees
              </b>
            </div>
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[5px]">
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
            </div>
          </div>
          <div className="self-stretch flex-1 bg-white flex flex-row p-10 items-center justify-between text-midnightblue-100 border-r-[4px] border-solid border-midnightblue-100">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <b className="relative tracking-[0.08em]">Without</b>
              <b className="self-stretch relative text-21xl leading-[130.7%] inline-block font-mukta text-darkorange-100 h-[108px] shrink-0">
                <p className="m-0">{`Fragmenting `}</p>
                <p className="m-0">Capital</p>
              </b>
            </div>
            <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[22px]">
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-midnightblue-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              <div className="relative box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
            </div>
          </div>
          <div className="self-stretch bg-midnightblue-100 flex flex-row p-10 items-center justify-between">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
              <b className="relative tracking-[0.08em]">Without</b>
              <b className="self-stretch relative text-21xl leading-[130.7%] inline-block font-mukta text-darkorange-100 h-[110px] shrink-0">
                Losting Capital Efficiency
              </b>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative w-[228.21px] h-[152.94px]">
                <div className="absolute top-[32.89px] left-[0px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[104.72px] left-[0px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[143.67px] left-[9.28px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[8.94px] left-[40.55px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[32.89px] left-[31.28px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[56.83px] left-[40.55px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[80.78px] left-[40.55px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[104.72px] left-[31.28px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[128.67px] left-[40.55px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[8.94px] left-[71.83px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[32.89px] left-[62.55px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[56.83px] left-[71.83px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[80.78px] left-[71.83px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[128.67px] left-[71.83px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[8.94px] left-[103.1px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[56.83px] left-[103.1px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[80.78px] left-[103.1px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[104.72px] left-[93.83px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[128.67px] left-[103.1px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[143.67px] left-[103.1px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[8.94px] left-[134.38px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[32.89px] left-[125.1px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[56.83px] left-[134.38px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[80.78px] left-[134.38px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[128.67px] left-[134.38px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[8.94px] left-[165.65px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[32.89px] left-[156.38px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[56.83px] left-[165.65px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[80.78px] left-[165.65px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[128.67px] left-[165.65px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[143.67px] left-[165.65px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[32.89px] left-[187.65px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[104.72px] left-[187.65px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[128.67px] left-[196.93px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[143.67px] left-[196.93px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[32.89px] left-[218.93px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-white" />
                <div className="absolute top-[56.83px] left-[228.21px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[80.78px] left-[228.21px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[104.72px] left-[218.93px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
                <div className="absolute top-[143.67px] left-[228.21px] box-border w-[8.94px] h-[9.28px] [transform:_rotate(-180deg)] [transform-origin:0_0] border-[2px] border-dashed border-darkorange-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start z-[4] text-lg text-ghostwhite lg:pl-0 lg:box-border">
        <div className="self-stretch bg-midnightblue-100 flex flex-row flex-wrap py-[89px] px-[100px] items-start justify-center gap-[150px] lg:pl-[100px] lg:pr-[100px] lg:box-border sm:flex-col sm:gap-[80px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] text-base text-white sm:flex-[unset] sm:self-stretch">
            <b className="relative leading-[15px]">Need Help?</b>
            <div className="relative text-xs leading-[15px] font-medium text-gray-400 flex items-center w-40">
              If you need help, contact us on one of our socials.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px] sm:flex-[unset] sm:self-stretch">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[13px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[0.37004756927490234px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[14.63px]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="relative leading-[22px] font-medium">Docs</div>
              </div>
              <div className="relative text-xs leading-[15px] font-medium text-gray-400">
                View our documentation
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[13px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[0.37004756927490234px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[14.63px]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="relative leading-[22px] font-medium">
                  GitHub
                </div>
              </div>
              <div className="relative text-xs leading-[15px] font-medium text-gray-400 flex items-center w-[228.02px]">
                View our smart contracts, SDK, and more
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[13px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[0.37004756927490234px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[14.63px]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="relative leading-[22px] font-medium">
                  Terms of Service
                </div>
              </div>
              <div className="relative text-xs leading-[15px] font-medium text-gray-400 flex items-center w-[172px]">
                Our rules for using the platform
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[0.37004756927490234px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[14.63px]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="relative leading-[22px] font-medium">
                  Privacy Policy
                </div>
              </div>
              <div className="relative text-xs leading-[15px] font-medium text-gray-400">
                View our policies around data
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px] sm:flex-[unset] sm:self-stretch">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-[1.8743501901626587px] pb-[0.9374994039535522px] pr-0 pl-[2.0816681711721685e-16px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[12.19px]"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className="relative leading-[22px] font-medium">
                  Twitter
                </div>
              </div>
              <div className="relative text-xs leading-[15px] font-medium text-gray-400">
                Keep up with the latest on twitter
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-[2.249986171722412px] pb-[2.250044345855713px] pr-[0.6094203591346741px] pl-[0.6093782782554626px] box-border items-start justify-start">
                  <img
                    className="relative w-[13.78px] h-[10.5px]"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <div className="relative leading-[22px] font-medium">
                  Discord
                </div>
              </div>
              <div className="relative text-xs leading-[15px] font-medium text-gray-400">
                Join the community
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[0.37004756927490234px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[14.63px]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="relative leading-[22px] font-medium">
                  Medium
                </div>
              </div>
              <div className="relative text-xs leading-[15px] font-medium text-gray-400 flex items-center w-[231.17px]">
                Read the latest from our team on Medium
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkorange-100 w-[1286px] h-[31px] flex flex-row p-2.5 box-border items-center justify-center text-center text-smi text-midnightblue-100 font-roboto sm:self-stretch sm:w-auto">
          <div className="flex-1 relative leading-[21px]">
            © 2023 Paragon Labs Ltd
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-5 px-10 box-border items-center justify-between z-[5] text-[19.69px] text-midnightblue-100 font-mukta">
        <img
          className="relative w-[255px] h-[43px] overflow-hidden shrink-0 cursor-pointer mq1024:w-[200px] mq744:w-[150px]"
          alt=""
          src="/valantis-logo.svg"
          onClick={onValantisImageClick}
        />
        <div className="flex flex-row items-center justify-start gap-[97px] lg:hidden md:hidden">
          <div className="w-[285px] flex flex-row items-start justify-start gap-[32px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[68px] flex flex-col items-start justify-start [&_.trade-child]:hover:flex">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue-100 text-left inline-block hover:font-bold hover:font-mukta hover:text-darkorange-100"
                onClick={onTRADEClick}
              >
                TRADE
              </button>
              <img
                className="trade-child relative w-[41px] h-1 hidden mt-[-4px] hover:flex"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[66px] flex flex-col items-start justify-start [&_.pools-child]:hover:flex [&_.pools1]:hover:font-bold [&_.pools1]:hover:font-mukta [&_.pools1]:hover:text-darkorange-100">
              <button
                className="pools1 cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue-100 text-left inline-block"
                onClick={onPOOLSClick}
              >
                POOLS
              </button>
              <img
                className="pools-child relative w-[41px] h-1 hidden mt-[-4px]"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[83px] flex flex-col items-start justify-center [&_.docs2]:hover:font-bold [&_.docs2]:hover:font-mukta [&_.docs2]:hover:text-darkorange-100 [&_.pools-child]:hover:flex">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="docs2 relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue-100 text-left">
                  DOCS
                </div>
                <img
                  className="relative w-[12.85px] h-[12.85px]"
                  alt=""
                  src="/vector-94.svg"
                />
              </div>
              <img
                className="pools-child relative w-[41px] h-1 hidden mt-[-4px]"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
          </div>
          <div className="rounded-8xs bg-darkorange-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[188px] flex flex-row p-2.5 box-border items-center justify-center hover:bg-sandybrown">
            <b className="relative tracking-[0.07em]">Connect Wallet</b>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-col items-start justify-start gap-[7px] [&_.hamburger-menu-inner]:hover:bg-darkorange-100 [&_.hamburger-menu-child]:hover:bg-darkorange-100 [&_.hamburger-menu-child]:hover:bg-darkorange-100 lg:flex md:flex"
          onClick={onHamburgerMenuClick}
        >
          <div className="hamburger-menu-child relative bg-midnightblue-100 w-5 h-0.5" />
          <div className="hamburger-menu-child relative bg-midnightblue-100 w-5 h-0.5" />
          <div className="hamburger-menu-inner relative bg-midnightblue-100 w-3.5 h-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Default01;
