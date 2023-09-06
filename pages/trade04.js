import { useCallback } from "react";
import { useRouter } from "next/router";

const Trade04 = () => {
  const router = useRouter();

  const onTrade04ContainerClick = useCallback(() => {
    router.push("/trade04");
  }, [router]);

  const onTradeClick = useCallback(() => {
    router.push("/trade");
  }, [router]);

  const onPoolClick = useCallback(() => {
    router.push("/pools");
  }, [router]);

  const onDocsClick = useCallback(() => {
    router.push("/pools");
  }, [router]);

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
    router.push("/component");
  }, [router]);

  return (
    <div
      className="relative bg-white w-full flex flex-col pt-20 px-0 pb-0 box-border items-start justify-start cursor-pointer text-left text-lg text-ghostwhite font-inter mq1024:pt-20 mq1024:box-border mq390:pt-0 mq390:box-border"
      onClick={onTrade04ContainerClick}
    >
      <div className="self-stretch bg-white h-[569px] flex flex-col py-[41px] px-0 box-border items-center justify-start relative gap-[57px] z-[0] mq390:pt-[100px] mq390:box-border">
        <div className="w-[1144px] flex flex-col items-center justify-center gap-[60px] z-[0] lg:self-stretch lg:w-auto mq1024:self-stretch mq1024:w-auto mq390:w-auto mq390:[align-self:unset]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-[55.37px] leading-[107.7%] font-bold font-mukta text-midnightblue-100 text-center inline-block hover:text-darkorange-100 mq1024:text-21xl mq390:text-11xl mq390:text-left mq390:self-stretch mq390:w-auto"
            onClick={onTradeClick}
          >
            Trade
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-[55.37px] leading-[107.7%] font-bold font-mukta text-midnightblue-100 text-center inline-block hover:text-darkorange-100 mq1024:text-21xl mq390:text-11xl mq390:text-left mq390:self-stretch mq390:w-auto"
            onClick={onPoolClick}
          >
            Pool
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-[55.37px] leading-[107.7%] font-bold font-mukta text-midnightblue-100 text-center inline-block hover:text-darkorange-100 mq1024:text-21xl mq390:text-11xl mq390:text-left mq390:self-stretch mq390:w-auto"
            onClick={onDocsClick}
          >
            Docs
          </button>
        </div>
        <div className="absolute my-0 mx-[!important] top-[41px] right-[42.32px] w-[15.68px] h-[15.43px] z-[1]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[15.43px] right-[0.24px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start z-[1]">
        <div className="self-stretch bg-midnightblue-100 flex flex-row flex-wrap py-[89px] px-[198px] items-start justify-center gap-[150px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] text-base text-white">
            <b className="relative leading-[15px]">Need Help?</b>
            <div className="relative text-xs leading-[15px] font-medium text-gray-400 flex items-center w-40">
              If you need help, contact us on one of our socials.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px]">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[13px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[0.37004756927490234px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[14.63px]"
                    alt=""
                    src="/vector4.svg"
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
                    src="/vector4.svg"
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
                    src="/vector4.svg"
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
                    src="/vector4.svg"
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
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px]">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="w-[15px] h-[15px] overflow-hidden shrink-0 flex flex-row pt-[1.8743501901626587px] pb-[0.9374994039535522px] pr-0 pl-[2.0816681711721685e-16px] box-border items-start justify-start">
                  <img
                    className="relative w-[15px] h-[12.19px]"
                    alt=""
                    src="/vector5.svg"
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
                    src="/vector6.svg"
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
                    src="/vector7.svg"
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
        <div className="self-stretch bg-darkorange-100 h-[31px] flex flex-row p-2.5 box-border items-center justify-center text-center text-smi text-midnightblue-100 font-roboto">
          <div className="flex-1 relative leading-[21px]">
            © 2023 Paragon Labs Ltd
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-5 px-10 box-border items-center justify-between z-[2] text-[19.69px] text-midnightblue-100 font-mukta">
        <img
          className="relative w-[255px] h-[43px] overflow-hidden shrink-0 cursor-pointer mq1024:w-[200px] mq744:w-[150px]"
          alt=""
          src="/valantis-logo1.svg"
          onClick={onValantisImageClick}
        />
        <div className="flex flex-row items-center justify-start gap-[97px] lg:hidden md:hidden">
          <div className="w-[285px] flex flex-row items-start justify-start gap-[32px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[68px] flex flex-col items-start justify-start [&_.trade-item]:hover:flex">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue-100 text-left inline-block hover:font-bold hover:font-mukta hover:text-darkorange-100"
                onClick={onTRADEClick}
              >
                TRADE
              </button>
              <img
                className="trade-item relative w-[41px] h-1 hidden mt-[-4px] hover:flex"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[66px] flex flex-col items-start justify-start [&_.pools-item]:hover:flex [&_.pools3]:hover:font-bold [&_.pools3]:hover:font-mukta [&_.pools3]:hover:text-darkorange-100">
              <button
                className="pools3 cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue-100 text-left inline-block"
                onClick={onPOOLSClick}
              >
                POOLS
              </button>
              <img
                className="pools-item relative w-[41px] h-1 hidden mt-[-4px]"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[83px] flex flex-col items-start justify-center [&_.docs6]:hover:font-bold [&_.docs6]:hover:font-mukta [&_.docs6]:hover:text-darkorange-100 [&_.pools-item]:hover:flex">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="docs6 relative text-[19.69px] tracking-[0.07em] font-mukta text-midnightblue-100 text-left">
                  DOCS
                </div>
                <img
                  className="relative w-[12.85px] h-[12.85px]"
                  alt=""
                  src="/vector-94.svg"
                />
              </div>
              <img
                className="pools-item relative w-[41px] h-1 hidden mt-[-4px]"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
          </div>
          <div className="rounded-8xs bg-darkorange-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[188px] flex flex-row p-2.5 box-border items-center justify-center">
            <b className="relative tracking-[0.07em]">Connect Wallet</b>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-col items-start justify-start gap-[7px] [&_.hamburger-menu-child3]:hover:bg-darkorange-100 [&_.hamburger-menu-child1]:hover:bg-darkorange-100 [&_.hamburger-menu-child1]:hover:bg-darkorange-100 lg:flex md:flex"
          onClick={onHamburgerMenuClick}
        >
          <div className="hamburger-menu-child1 relative bg-midnightblue-100 w-5 h-0.5" />
          <div className="hamburger-menu-child1 relative bg-midnightblue-100 w-5 h-0.5" />
          <div className="hamburger-menu-child3 relative bg-midnightblue-100 w-3.5 h-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Trade04;
