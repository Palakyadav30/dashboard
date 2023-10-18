import * as React from "react";

export default function DashboardComponent() {
  return (
    <main className="bg-slate-50 flex flex-col pr-5">
      <header className="self-stretch mr-4 max-md:max-w-full max-md:mr-2.5">
        <nav className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[23%] max-md:w-full">
            <div className="shadow-[0px_10px_60px_0px_rgba(226,236,249,0.50)] bg-white flex w-[306px] max-w-full grow flex-col mx-auto px-5 py-10 max-md:mt-12">
              <div className="self-center flex w-[250px] max-w-full flex-col -mt-0.5">
                <div className="flex w-[216px] max-w-full items-start gap-2 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2b8a3b2-7265-473c-9376-c88509741e10?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-[37px] overflow-hidden shrink-0"
                    alt="Logo"
                  />
                  <div className="text-black text-2xl font-semibold tracking-wide self-center w-[161px] my-auto">
                    Dashboard
                  </div>
                  <div className="text-zinc-500 text-xs font-medium tracking-normal self-center my-auto">
                    v.01
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3caf168e-7385-43bd-8a4f-f1def02df423?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-[5.43] object-cover object-center w-full overflow-hidden self-stretch mt-14"
                  alt="Dashboard Image"
                />
                <div className="self-center flex w-[231px] max-w-full items-start justify-between gap-3.5 mt-7 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/521fab62-3bb0-40b7-8460-28d159efa0d1?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                    alt="Product Icon"
                  />
                  <div className="text-slate-400 text-sm font-medium tracking-normal self-center my-auto">
                    Product
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/40fde80e-a42a-4a1d-95bc-dc0ea7fb1d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    alt="Arrow Icon"
                  />
                </div>
                <div className="self-center flex w-[231px] max-w-full items-start justify-between gap-3.5 mt-10 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a89fc057-dd5b-4e80-8195-9279d93142b2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                    alt="Customers Icon"
                  />
                  <div className="text-slate-400 text-sm font-medium tracking-normal self-center my-auto">
                    Customers
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccf02fd1-3398-4ce2-9d01-0896d456d05d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    alt="Arrow Icon"
                  />
                </div>
                <div className="self-center flex w-[231px] max-w-full items-start justify-between gap-3.5 mt-10 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cad4efb-9d53-467f-af21-fdda56417c86?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                    alt="Income Icon"
                  />
                  <div className="text-slate-400 text-sm font-medium tracking-normal self-center my-auto">
                    Income
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa9255c8-f06b-49cb-bc83-435fbe195eb3?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    alt="Arrow Icon"
                  />
                </div>
                <div className="self-center flex w-[231px] max-w-full items-start justify-between gap-3.5 mt-10 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79c70fb2-9e48-4e6b-9f92-5b3873894dd5?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                    alt="Promote Icon"
                  />
                  <div className="text-slate-400 text-sm font-medium tracking-normal self-center my-auto">
                    Promote
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6a0c166-ceea-455c-b5ac-6f05828ee994?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    alt="Arrow Icon"
                  />
                </div>
                <div className="self-center flex w-[231px] max-w-full items-start justify-between gap-3.5 mt-10 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91cf3b24-b6de-4f28-b812-f602a8bc5c6e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                    alt="Help Icon"
                  />
                  <div className="text-slate-400 text-sm font-medium tracking-normal self-center my-auto">
                    Help
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/26930292-46d7-4dd3-b895-f2f27a994201?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto"
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <div className="self-center flex w-[250px] max-w-full flex-col mt-96 mb-9 max-md:mt-52">
                <div className="self-stretch flex w-full flex-col pt-8 pb-6 px-5 rounded-3xl">
                  <div className="text-white text-center text-sm font-semibold tracking-normal self-center w-[183px] max-w-full">
                    Upgrade to PRO to get access all Features!
                  </div>
                  <div className="shadow-[2px_4px_4px_0px_rgba(79,42,234,0.17)] bg-white self-stretch flex w-full flex-col ml-1 mr-1 mt-7 px-5 py-4 rounded-3xl">
                    <div className="text-indigo-600 text-center text-sm font-semibold tracking-normal self-center">
                      Get Pro Now!
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3 mt-12 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b61b7446-7293-4029-bff2-b30f0c6d2081?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-[42px] overflow-hidden shrink-0"
                    alt="User Avatar"
                  />
                  <div className="self-center flex flex-col my-auto">
                    <div className="text-black text-sm font-medium tracking-normal">
                      Evano
                    </div>
                    <div className="text-neutral-500 text-xs tracking-normal mt-2.5">
                      Project Manager
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4440627-81a2-4dd0-8a6c-50fff2478385?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden self-center shrink-0 my-auto"
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-12">
              <div className="self-center flex w-full max-w-[968px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-2xl font-medium self-center w-[189px] my-auto">
                  Hello Evano 👋🏼,
                </div>
                <div className="shadow-[0px_10px_60px_0px_rgba(226,236,249,0.50)] bg-white self-stretch flex w-[216px] max-w-full flex-col pl-2 pr-5 py-2 rounded-xl">
                  <div className="flex w-[79px] max-w-full items-start gap-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c38066f8-09c5-454f-87be-6a4109432d06?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                      alt="Search Icon"
                    />
                    <div className="text-gray-400 text-sm tracking-normal self-center my-auto">
                      Search
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col fill-white overflow-hidden self-center relative flex min-h-[151px] w-full max-w-[968px] mt-6 px-5 py-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd195ea8-c023-41f9-97cf-75ef5b73f5ce?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="absolute h-full w-full object-cover object-center"
                  alt="Background Image"
                />
                <div className="relative self-center flex w-[841px] max-w-full items-start justify-between gap-5 -mt-px mb-px max-md:flex-wrap">
                  <div className="self-stretch flex grow shrink-0 basis-auto items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a768982a-8a29-4e3f-bc85-6aa37f42b694?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-[84px] overflow-hidden shrink-0 mt-px"
                      alt="Earning Icon"
                    />
                    <div className="self-center flex flex-col my-auto">
                      <div className="text-neutral-400 text-sm tracking-normal">
                        Earning
                      </div>
                      <div className="text-zinc-800 text-3xl font-semibold leading-8 tracking-tight mt-2">
                        $198k
                      </div>
                      <div className="flex w-[123px] max-w-full items-start gap-1 mt-2">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08759b5c-9988-4c17-9277-17fb5050ff51?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
                          alt="Percentage Icon"
                        />
                        <div className="text-zinc-800 text-xs tracking-normal self-center my-auto">
                          <span className="font-bold text-[rgba(0,172,79,1)]">
                            37.8%
                          </span>{" "}
                          <span className=" text-zinc-800">
                            this month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-100 self-stretch w-px h-[87px] grow shrink-0 basis-auto" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9d874c-6514-40f7-830e-f32611a6c072?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-[84px] overflow-hidden shrink-0 mt-px"
                      alt="Balance Icon"
                    />
                    <div className="self-center flex flex-col my-auto">
                      <div className="text-neutral-400 text-sm tracking-normal">
                        Balance
                      </div>
                      <div className="text-zinc-800 text-3xl font-semibold leading-8 tracking-tight mt-3">
                        $2.4k
                      </div>
                      <div className="flex w-[105px] max-w-full items-start gap-1 mt-2">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/05bd0bb8-73a5-4085-84a6-79f6bda635e2?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
                          alt="Percentage Icon"
                        />
                        <div className="text-zinc-800 text-xs tracking-normal self-center my-auto">
                          <span className="font-bold text-[rgba(208,0,75,1)]">
                            2%
                          </span>{" "}
                          <span className=" text-zinc-800">
                            this month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex grow shrink-0 basis-auto items-start justify-between gap-5 max-md:justify-center">
                    <div className="bg-zinc-100 self-stretch w-px h-[87px] grow shrink-0 basis-auto" />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c23bbc07-1f1a-45a3-8dea-e934a441cd04?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-[84px] overflow-hidden shrink-0 mt-px"
                      alt="Total Sales Icon"
                    />
                    <div className="self-center flex flex-col my-auto">
                      <div className="text-neutral-400 text-sm tracking-normal">
                        Total Sales
                      </div>
                      <div className="text-zinc-800 text-3xl font-semibold leading-8 tracking-tight mt-3">
                        $89k
                      </div>
                      <div className="flex w-[99px] max-w-full items-start gap-1 mt-2">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23013b6e-cfec-4c85-96b5-0aa70a09bf5e?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
                          alt="Percentage Icon"
                        />
                        <div className="text-zinc-800 text-xs tracking-normal self-center my-auto">
                          <span className="font-bold text-[rgba(0,172,79,1)]">
                            11%
                          </span>{" "}
                          <span className=" text-zinc-800">
                            this week
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center z-[1] mt-0 w-full max-w-[1028px] max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/5 max-md:w-full">
                  <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-12">
                    <div className="self-center flex w-full max-w-[968px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                      <div className="text-black text-2xl font-medium self-center w-[140px] my-auto">
                        Product Sell
                      </div>
                      <div className="bg-slate-50 self-stretch flex w-[216px] max-w-full flex-col pl-2 pr-5 py-2 rounded-xl">
                        <div className="flex w-[72px] max-w-full items-start gap-2">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b807a0f-704f-4822-a7b4-de0c28941324?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                            alt="Search Icon"
                          />
                          <div className="text-gray-400 text-xs tracking-normal self-center my-auto">
                            Search
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mr-3.5 mt-6 max-md:flex-wrap max-md:justify-center max-md:mr-2.5">
                      <div className="text-gray-400 text-sm font-medium tracking-normal self-stretch w-[108px] mt-px">
                        Product Name
                      </div>
                      <div className="text-gray-400 text-sm font-medium tracking-normal self-stretch mt-px">
                        Stock
                      </div>
                      <div className="text-gray-400 text-sm font-medium tracking-normal self-stretch">
                        Price
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[89%] ml-5 max-md:w-full">
                  <div className="relative flex flex-col w-[716px] my-auto max-md:max-w-full max-md:mt-9">
                    <div className="self-stretch flex w-full items-start justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                      <div className="self-stretch flex flex-col">
                        <div className="text-black text-lg font-semibold tracking-normal">
                          Abstract 3D
                        </div>
                        <div className="text-slate-400 text-xs tracking-normal mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                      </div>
                      <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                        32 in stock
                      </div>
                      <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                        $ 45.99
                      </div>
                      <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                        20
                      </div>
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:flex-wrap max-md:justify-center">
                      <div className="self-stretch flex flex-col">
                        <div className="text-black text-lg font-semibold tracking-normal">
                          Sarphens Illustration
                        </div>
                        <div className="text-slate-400 text-xs tracking-normal mt-2.5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                      </div>
                      <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                        32 in stock
                      </div>
                      <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                        $ 45.99
                      </div>
                      <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                        20
                      </div>
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:flex-wrap max-md:justify-center">
                      <div className="self-stretch flex flex-col">
                        <div className="text-black text-lg font-semibold tracking-normal">
                          Landing Page 3D max
                        </div>
                        <div className="text-slate-400 text-xs tracking-normal mt-2.5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                      </div>
                      <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                        32 in stock
                      </div>
                      <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                        $ 45.99
                      </div>
                      <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                        20
                      </div>
                    </div>
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:flex-wrap max-md:justify-center">
                      <div className="self-stretch flex flex-col">
                        <div className="text-black text-lg font-semibold tracking-normal">
                          Collab Illustration
                        </div>
                        <div className="text-slate-400 text-xs tracking-normal mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                      </div>
                      <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                        32 in stock
                      </div>
                      <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                        $ 45.99
                      </div>
                      <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                        20
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="flex-col fill-white overflow-hidden self-center relative flex min-h-[472px] ml-0 w-[968px] max-w-[968px] grow pt-6 pb-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f35ab781-7c2f-4801-b2be-3cd5c1c4ad3b?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="absolute h-full w-full object-cover object-center"
          alt="Background Image"
        />
        <div className="relative self-center flex ml-0 w-[882px] max-w-full items-start justify-between gap-5 max-md:flex-wrap">
          <div className="self-stretch flex flex-col grow shrink-0 basis-auto w-[722px] max-md:max-w-full">
            <div className="self-stretch flex w-full items-start justify-between gap-5 max-md:flex-wrap">
              <div className="text-black text-2xl font-semibold tracking-tight self-center w-[140px] my-auto">
                Product Sell
              </div>
              <div className="bg-slate-50 self-stretch flex w-[216px] max-w-full flex-col pl-2 pr-5 py-2 rounded-xl">
                <div className="flex w-[72px] max-w-full items-start gap-2">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/962101eb-e068-4a9f-8e0d-c46f03533d0d?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                    alt="Search Icon"
                  />
                  <div className="text-gray-400 text-xs tracking-normal self-center my-auto">
                    Search
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex w-full items-start justify-between gap-5 mr-3.5 mt-6 max-md:flex-wrap max-md:justify-center max-md:mr-2.5">
              <div className="text-gray-400 text-sm font-medium tracking-normal self-stretch w-[108px] mt-px">
                Product Name
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-normal self-stretch mt-px">
                Stock
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-normal self-stretch">
                Price
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[135px]">
            <div className="bg-slate-50 self-stretch flex w-full items-start justify-between gap-3.5 pl-4 pr-3 py-2 rounded-xl">
              <div className="text-zinc-500 text-xs tracking-normal self-center my-auto">
                Last 30 days
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee913188-8b5d-44f6-b66c-baa58eb0d6bb?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                alt="Arrow Icon"
              />
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-normal self-center ml-2.5 mt-7">
              Total Sales
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-zinc-100 self-stretch w-full h-px mt-5 max-md:max-w-full" />
      <section className="relative self-center ml-0 w-[832px] max-w-full mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[11%] max-md:w-full">
            <div className="relative flex grow flex-col max-md:mt-7">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35eb0504-5591-4134-b518-47a30cf65ef9?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-[1.61] object-cover object-center w-full overflow-hidden self-stretch"
                alt="Image 1"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d944abe4-e305-45e7-9356-928584371a26?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-[1.61] object-cover object-center w-full overflow-hidden self-stretch mt-6"
                alt="Image 2"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c135213b-c889-49ae-b20a-f7d758942535?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-[1.61] object-cover object-center w-full overflow-hidden self-stretch mt-6"
                alt="Image 3"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/435ed5d0-f2f5-4dbc-8940-b4c3c0831123?apiKey=28f37d8a661a4067b513dcace0b7c9fd&"className="aspect-[1.61] object-cover object-center w-full overflow-hidden self-stretch grow mt-6"
                alt="Image 4"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[89%] ml-5 max-md:w-full">
            <div className="relative flex flex-col w-[716px] my-auto max-md:max-w-full max-md:mt-9">
              <div className="self-stretch flex w-full items-start justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                <div className="self-stretch flex flex-col">
                  <div className="text-black text-lg font-semibold tracking-normal">
                    Abstract 3D
                  </div>
                  <div className="text-slate-400 text-xs tracking-normal mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                  32 in stock
                </div>
                <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                  $ 45.99
                </div>
                <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                  20
                </div>
              </div>
              <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:flex-wrap max-md:justify-center">
                <div className="self-stretch flex flex-col">
                  <div className="text-black text-lg font-semibold tracking-normal">
                    Sarphens Illustration
                  </div>
                  <div className="text-slate-400 text-xs tracking-normal mt-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                  32 in stock
                </div>
                <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                  $ 45.99
                </div>
                <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                  20
                </div>
              </div>
              <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:flex-wrap max-md:justify-center">
                <div className="self-stretch flex flex-col">
                  <div className="text-black text-lg font-semibold tracking-normal">
                    Landing Page 3D max
                  </div>
                  <div className="text-slate-400 text-xs tracking-normal mt-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                  32 in stock
                </div>
                <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                  $ 45.99
                </div>
                <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                  20
                </div>
              </div>
              <div className="self-stretch flex w-full items-start justify-between gap-5 mt-10 max-md:flex-wrap max-md:justify-center">
                <div className="self-stretch flex flex-col">
                  <div className="text-black text-lg font-semibold tracking-normal">
                    Collab Illustration
                  </div>
                  <div className="text-slate-400 text-xs tracking-normal mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className="text-zinc-800 text-sm tracking-normal self-center my-auto">
                  32 in stock
                </div>
                <div className="text-black text-base font-medium tracking-normal self-center my-auto">
                  $ 45.99
                </div>
                <div className="text-zinc-800 text-base tracking-normal self-center my-auto">
                  20
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}