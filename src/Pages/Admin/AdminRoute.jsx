import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Dashboard from "./Dashboard";
import Error from "../../_utils/Error";
import Livre from "./Livre";
import Cours from "./Cours";
import Examen from "./Examen";
import Video from "./Video";
import VideoView from "./VideoView";
import Quiz from "./Quiz";
import SupportPdf from "./SupportPdf";


export default function AdminRoute() {
  return (
    <>
   
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="livre" element={<Livre />} />
          <Route path="cours" element={<Cours />} />
          <Route path="examen" element={<Examen />} />
          <Route path="video" element={<Video />} />
          <Route path="video/list/:id_cours" element={<VideoView />} />
          <Route path="quiz" element={<Quiz/>}/>
          <Route path='support-pdf' element={<SupportPdf/>}/>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
