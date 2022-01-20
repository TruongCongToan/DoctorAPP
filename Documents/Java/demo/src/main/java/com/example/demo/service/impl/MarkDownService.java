package com.example.demo.service.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DAO.IMarkDownDAO;
import com.example.demo.entity.MarkDown;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.MarkDownModel;
import com.example.demo.service.IMarkDownSevice;
@Service
public class MarkDownService implements IMarkDownSevice  {
	@Autowired
	private IMarkDownDAO markDownDAO;
	
	//  ham lay ra users
	private List<MarkDownModel> getListMarkDownModel(List<MarkDown> markDowns) {
		List<MarkDownModel> markDownModels= new ArrayList<>();
		for (MarkDown markDown: markDowns) {
			MarkDownModel markDownModel = new MarkDownModel();
			
			markDownModel.setId(markDown.getId());
			markDownModel.setContentHTML(markDown.getContentHTML());
			markDownModel.setContentMarkDown(markDown.getContentMarkDown());
			markDownModel.setDescription(markDown.getDescription());
//			markDownModel.setDoctorID(markDown.getDoctorID());
			
			markDownModel.setClinicID(markDown.getClinicID());
			markDownModel.setSpecialtyID(markDown.getSpecialtyID());
			
			markDownModels.add(markDownModel);
		}
		return markDownModels;
	}

	//get all markdown
	@Override
	public List<MarkDown> getLisMarkDown() throws SQLException {
		List<MarkDown> markDowns = markDownDAO.getAllMarkDown();
//		List<MarkDownModel> markDownModels = getListMarkDownModel(markDowns);
		return markDowns;
	}

	//post doctor infor
	@Override
	public MarkDown postInforDoctor(MarkDownModel markDownModel) throws SQLException {
	

//	if (getMarkDownByDoctorID(markDownModel.getDoctorID()) == null) {
	
		MarkDown markDown = new MarkDown();
	
	markDown.setContentHTML(markDownModel.getContentHTML());
	markDown.setContentMarkDown(markDownModel.getContentMarkDown());
	markDown.setDescription(markDownModel.getDescription());
//	markDown.setDoctorID(markDownModel.getDoctorID());
	return markDownDAO.save(markDown);
//		
//	}else {
//
//		 throw new DuplicateRecordException("Da co DotorID nay trong danh sach");		 
//	}
	
}
//get markdow by doctorID

@Override
public MarkDown getMarkDownByDoctorID(int doctorID) throws SQLException {
	if (doctorID != 0) {
		

		MarkDown markDown = markDownDAO.findByDoctorID(doctorID);
		if (markDown != null) {
			return markDown;
		}else {
			 throw new NotFoundException("Không tìm thấy thông tin trong danh sách !");
		}
	} else {
		 throw new NotFoundException("Dữ liệu nhập vào không được phép null !");
	}
}

@Override
public void editDoctorInfo(MarkDownModel markDownModel, int doctorID) throws SQLException {
	
	if (getMarkDownByDoctorID(doctorID) != null) {
		MarkDown markDown = getMarkDownByDoctorID(doctorID);
		
		if (!markDown.getContentHTML().equals(markDownModel.getContentHTML()) ) {
			markDown.setContentHTML(markDownModel.getContentHTML());	
			}
		if (!markDown.getContentMarkDown().equals(markDownModel.getContentMarkDown())) {
			markDown.setContentMarkDown(markDownModel.getContentMarkDown());
		}
		if (!markDown.getDescription().equals(markDownModel.getDescription())) {
			markDown.setDescription(markDownModel.getDescription());
		}
//		if (markDown.getDoctorID() != markDownModel.getDoctorID() &&markDown.getDoctorID()!=0) {
//			markDown.setDoctorID(markDownModel.getDoctorID());
//		}
		markDownDAO.saveAndFlush(markDown);
	}else {
		throw new NotFoundException("Khong tim thay nguoi dung nay");
	}
}


}
