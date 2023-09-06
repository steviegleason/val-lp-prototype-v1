import { useCallback } from "react";
import { useRouter } from "next/router";

const Pools = () => {
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
    <div className="relative bg-midnightblue-100 shadow-[-57px_49px_37px_rgba(0,_0,_0,_0.25)] w-full overflow-hidden flex flex-col items-start justify-start text-left text-[15.08px] text-midnightblue-100 font-inter">
      <div className="self-stretch bg-midnightblue-100 h-[653px] flex flex-row pt-[120px] pb-0 pr-[244px] pl-[182px] box-border items-center justify-start gap-[107px] z-[0] text-darkorange-100 lg:pl-[130px] lg:box-border sm:pl-[30px] sm:box-border">
        <div className="relative w-96 h-[550px] lg:w-96 sm:hidden">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
            <div className="relative w-96 h-[550px] lg:w-96">
              <img
                className="absolute top-[-0.5px] left-[8.5px] w-28 h-[120px]"
                alt=""
                src="/vector-53.svg"
              />
              <img
                className="absolute top-[-0.5px] left-[119.5px] w-[154px] h-[120px]"
                alt=""
                src="/vector-54.svg"
              />
              <img
                className="absolute top-[-0.5px] left-[272.5px] w-28 h-[120px]"
                alt=""
                src="/vector-53.svg"
              />
              <img
                className="absolute top-[118.5px] left-[8.5px] w-28 h-[304px]"
                alt=""
                src="/vector-56.svg"
              />
              <img
                className="absolute top-[118.5px] left-[272.5px] w-28 h-[296.28px]"
                alt=""
                src="/vector-58.svg"
              />
              <img
                className="absolute top-[421.5px] left-[8.5px] w-[256.64px] h-[119.5px]"
                alt=""
                src="/vector-57.svg"
              />
              <div className="absolute top-[0px] left-[9px] flex flex-row items-start justify-start gap-[10px] opacity-[0.5]">
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
              </div>
              <div className="absolute top-[119px] left-[381px] flex flex-row items-start justify-start gap-[10px] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]">
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
              </div>
              <div className="absolute top-[536px] left-[14px] flex flex-row items-start justify-start gap-[10px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.5]">
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                  <div className="relative box-border w-5 h-[15px] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-darkgray" />
                </div>
              </div>
              <div className="absolute top-[532px] left-[0px] bg-darkorange-100 w-[18px] h-[18px]" />
              <div className="absolute top-[0px] left-[164px] box-border w-[220px] h-[15px] border-[1px] border-solid border-darkorange-100" />
              <div className="absolute top-[22px] left-[164px] box-border w-[220px] h-[15px] border-[1px] border-solid border-darkorange-100" />
              <div className="absolute top-[44px] left-[164px] box-border w-[220px] h-[15px] border-[1px] border-solid border-darkorange-100" />
            </div>
          </div>
        </div>
        <div className="w-[346px] flex flex-col items-start justify-start gap-[28px] md:flex-1 sm:flex-1">
          <div className="flex flex-col items-start justify-start gap-[17px] md:self-stretch md:w-auto">
            <b className="relative tracking-[0.08em]">Provide Liquidity</b>
            <b className="relative text-[55.37px] leading-[107.7%] inline-block font-mukta text-white w-[346px] md:self-stretch md:w-auto sm:text-[50px] sm:self-stretch sm:w-auto">
              Put your funds to work by providing liquidity.
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[21px] text-sm text-white font-mukta">
            <img
              className="relative w-[7.36px] h-[168.39px]"
              alt=""
              src="/vector-592.svg"
            />
            <div className="relative leading-[130.7%] inline-block w-[215px] h-[92px] shrink-0">
              Valantis’s flexible DEX design allows you to build sophisticated
              liquidity distributions without fragmenting your liquidity or
              paying enormous gas fees.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[178px] overflow-hidden shrink-0 flex flex-row py-0 pr-0 pl-[41px] box-border items-start justify-start z-[1]">
        <img
          className="relative w-[84px] h-[122px]"
          alt=""
          src="/vector14.svg"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[8px] z-[2] text-base">
        <div className="flex-1 bg-white h-[470.72px] flex flex-col py-6 px-0 box-border items-center justify-between">
          <div className="relative rounded-[50%] bg-gainsboro w-[74px] h-[74px]" />
          <div className="self-stretch rounded-2xl flex flex-col pt-8 px-8 pb-[31.990020751953125px] items-start justify-between">
            <div className="self-stretch flex flex-col pt-0 px-0 pb-[23.729995727539062px] items-center justify-start">
              <div className="w-[341.33px] flex flex-row py-0 pr-[10.329986572265625px] pl-0 box-border items-start justify-start">
                <div className="relative leading-[22.4px]">
                  <p className="m-0">
                    The most informed see the writing on the
                  </p>
                  <p className="m-0">
                    wall for how integral Balancer is becoming
                  </p>
                  <p className="m-0">
                    to DeFi liquidity. It is beloved by builders for
                  </p>
                  <p className="m-0">allowing them to build a vast array of</p>
                  <p className="m-0">
                    liquidity pools to solve pressing problems.
                  </p>
                  <p className="m-0">
                    Over time, it will find itself at the center of
                  </p>
                  <p className="m-0">{`more & more pivotal liquidity experiments.`}</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 pr-[127.09999084472656px] pl-0 items-center justify-start">
              <div className="rounded-9980xl w-20 overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <div className="relative w-20 h-20 max-w-[80px]" />
              </div>
              <div className="flex flex-col py-0 pr-[0.2299957275390625px] pl-4 items-start justify-start">
                <div className="relative leading-[22.4px] font-medium">
                  Chris Burniske
                </div>
                <div className="relative leading-[22.4px] font-medium mt-[-0.61px]">
                  Placeholder VC
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white flex flex-col py-6 px-0 items-center justify-start gap-[24px]">
          <div className="relative rounded-[50%] bg-gainsboro w-[74px] h-[74px]" />
          <div className="self-stretch rounded-2xl flex flex-col pt-8 px-8 pb-[31.990020751953125px] items-center justify-between">
            <div className="self-stretch flex flex-col pt-0 px-0 pb-[23.729995727539062px] items-center justify-center">
              <div className="w-[341.33px] flex flex-row py-0 pr-[10.329986572265625px] pl-0 box-border items-start justify-start">
                <div className="relative leading-[22.4px]">
                  <p className="m-0">
                    The most informed see the writing on the
                  </p>
                  <p className="m-0">
                    wall for how integral Balancer is becoming
                  </p>
                  <p className="m-0">
                    to DeFi liquidity. It is beloved by builders for
                  </p>
                  <p className="m-0">allowing them to build a vast array of</p>
                  <p className="m-0">
                    liquidity pools to solve pressing problems.
                  </p>
                  <p className="m-0">
                    Over time, it will find itself at the center of
                  </p>
                  <p className="m-0">{`more & more pivotal liquidity experiments.`}</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 pr-[127.09999084472656px] pl-0 items-center justify-start">
              <div className="rounded-9980xl w-20 overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <div className="relative w-20 h-20 max-w-[80px]" />
              </div>
              <div className="flex flex-col py-0 pr-[0.2299957275390625px] pl-4 items-start justify-start">
                <div className="relative leading-[22.4px] font-medium">
                  Chris Burniske
                </div>
                <div className="relative leading-[22.4px] font-medium mt-[-0.61px]">
                  Placeholder VC
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white h-[470.72px] flex flex-col py-6 px-0 box-border items-center justify-between">
          <div className="relative rounded-[50%] bg-gainsboro w-[74px] h-[74px]" />
          <div className="self-stretch rounded-2xl flex flex-col pt-8 px-8 pb-[31.990020751953125px] items-start justify-between">
            <div className="self-stretch flex flex-col pt-0 px-0 pb-[23.729995727539062px] items-start justify-start">
              <div className="w-[341.33px] flex flex-row py-0 pr-[10.329986572265625px] pl-0 box-border items-center justify-center">
                <div className="relative leading-[22.4px]">
                  <p className="m-0">
                    The most informed see the writing on the
                  </p>
                  <p className="m-0">
                    wall for how integral Balancer is becoming
                  </p>
                  <p className="m-0">
                    to DeFi liquidity. It is beloved by builders for
                  </p>
                  <p className="m-0">allowing them to build a vast array of</p>
                  <p className="m-0">
                    liquidity pools to solve pressing problems.
                  </p>
                  <p className="m-0">
                    Over time, it will find itself at the center of
                  </p>
                  <p className="m-0">{`more & more pivotal liquidity experiments.`}</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 pr-[127.09999084472656px] pl-0 items-center justify-start">
              <div className="rounded-9980xl w-20 overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <div className="relative w-20 h-20 max-w-[80px]" />
              </div>
              <div className="flex flex-col py-0 pr-[0.2299957275390625px] pl-4 items-start justify-start">
                <div className="relative leading-[22.4px] font-medium">
                  Chris Burniske
                </div>
                <div className="relative leading-[22.4px] font-medium mt-[-0.61px]">
                  Placeholder VC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1198px] flex flex-col items-start justify-start z-[3] text-lg text-ghostwhite">
        <div className="self-stretch flex flex-row flex-wrap py-[89px] px-[198px] items-start justify-center gap-[150px]">
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
                    src="/vector15.svg"
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
                    src="/vector15.svg"
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
                    src="/vector15.svg"
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
                    src="/vector15.svg"
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
                    src="/vector16.svg"
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
                    src="/vector17.svg"
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
                    src="/vector18.svg"
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
        <div className="bg-darkorange-100 w-[1286px] h-[31px] flex flex-row p-2.5 box-border items-center justify-center text-center text-smi text-midnightblue-100 font-roboto">
          <div className="flex-1 relative leading-[21px]">
            © 2023 Paragon Labs Ltd
          </div>
        </div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[109px] left-[0px] bg-darkorange-100 w-[53px] h-[7px] z-[4]" />
      <div className="my-0 mx-[!important] absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-5 px-10 box-border items-center justify-between z-[5] text-[19.69px] font-mukta">
        <img
          className="relative w-[255px] h-[43px] overflow-hidden shrink-0 cursor-pointer mq1024:w-[200px] mq744:w-[150px]"
          alt=""
          src="/valantis-logo.svg"
          onClick={onValantisImageClick}
        />
        <div className="flex flex-row items-center justify-start gap-[97px] lg:hidden md:hidden">
          <div className="w-[285px] flex flex-row items-start justify-start gap-[32px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[68px] flex flex-col items-start justify-start [&_.rectangle-icon]:hover:flex">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-white text-left inline-block hover:font-bold hover:font-mukta hover:text-darkorange-100"
                onClick={onTRADEClick}
              >
                TRADE
              </button>
              <img
                className="rectangle-icon relative w-[41px] h-1 hidden mt-[-4px] hover:flex"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[66px] flex flex-col items-start justify-start [&_.pools-child1]:hover:flex [&_.pools7]:hover:font-bold [&_.pools7]:hover:font-mukta [&_.pools7]:hover:text-darkorange-100">
              <button
                className="pools7 cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-white text-left inline-block"
                onClick={onPOOLSClick}
              >
                POOLS
              </button>
              <img
                className="pools-child1 relative w-[41px] h-1 hidden mt-[-4px]"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[83px] flex flex-col items-start justify-center [&_.docs11]:hover:font-bold [&_.docs11]:hover:font-mukta [&_.docs11]:hover:text-darkorange-100 [&_.pools-child1]:hover:flex">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="docs11 relative text-[19.69px] tracking-[0.07em] font-mukta text-white text-left">
                  DOCS
                </div>
                <img
                  className="relative w-[12.85px] h-[12.85px]"
                  alt=""
                  src="/vector-941.svg"
                />
              </div>
              <img
                className="pools-child1 relative w-[41px] h-1 hidden mt-[-4px]"
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
          className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-col items-start justify-start gap-[7px] [&_.hamburger-menu-child9]:hover:bg-darkorange-100 [&_.hamburger-menu-child7]:hover:bg-darkorange-100 [&_.hamburger-menu-child7]:hover:bg-darkorange-100 lg:flex md:flex"
          onClick={onHamburgerMenuClick}
        >
          <div className="hamburger-menu-child7 relative bg-white w-5 h-0.5" />
          <div className="hamburger-menu-child7 relative bg-white w-5 h-0.5" />
          <div className="hamburger-menu-child9 relative bg-white w-3.5 h-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Pools;
