// import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
// import { currentSectionAtom, currentTabAtom } from "@/recoil/atoms";
// import { useRecoilValue } from "recoil";
// import JobList from "../JobList/JobList";
// import Wallet from "../Wallet/Wallet";
// import Earning from "../Earning/Earning";
// import Account from "../Account/Account";
// import AccountDetail from "../JobList/AccountDetail/AccountDetail";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// import "./DetailScreen.css";
// import { sizeRatio } from "@/theme";
// function handleClick(event) {
//   event.preventDefault();
// }
// const DetailScreen = () => {
//   const currSection = useRecoilValue(currentSectionAtom);
//   console.log(currSection);
//   const breadcrumbs = [
//     <Link
//       underline="hover"
//       key="1"
//       color="inherit"
//       href="#"
//       onClick={handleClick}
//       style={{
//         fontFamily: "Helvetica",
//         fontWeight: 400,
//         fontSize: sizeRatio(20),
//         color: "#FFB600",
//       }}
//     >
//       {currSection}
//     </Link>,

//     <Typography
//       key="2"
//       color="text.primary"
//       style={{
//         fontFamily: "Helvetica",
//         fontWeight: 400,
//         fontSize: sizeRatio ( 18),
//       }}
//     >
//       Breadcrumb
//     </Typography>,
//   ];
//   return (
//     <div
//       style={{
//         paddingInline: sizeRatio(70),
//         paddingBlock: sizeRatio(30),
//         backgroundColor: "#E2E8F0",
//         width: sizeRatio(1352),
//       }}
//     >
//       <Stack spacing={2}>
//         <Breadcrumbs
//           separator={<NavigateNextIcon fontSize="small" />}
//           aria-label="breadcrumb"
//         >
//           {breadcrumbs}
//         </Breadcrumbs>
//       </Stack>

//       {currSection === "JobList" ? (
//         <JobList />
//       ) : currSection === "AccountDetail" ? (
//         <AccountDetail />
//       ) : currSection === "Wallet" ? (
//         <Wallet />
//       ) : currSection === "Earning" ? (
//         <Earning />
//       ) : currSection === "Account" ? (
//         <Account />
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };
// export default DetailScreen;
