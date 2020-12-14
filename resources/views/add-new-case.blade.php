@extends('front.layout.app')

@section('content')
	<div class="ms-content-wrapper">
         <div class="row">
            <!-- Notifications Widgets -->
            <div class="col-xl-12 col-md-12">
               <div class="page-heading">
                  <h5>Add New Cases</h5>
               </div>
               <div class="ms-panel">
                  <div class="ms-panel-header">
                     <h6>Patient Details</h6>
                  </div>
                  <div class="ms-panel-body">
                     <form method="post" id="general_form">
                        <input type="hidden" name="_token" value="ayZqC8u5BG3ka5swnF7h535MI4Ro8oF9aRjCbNRg"> 
                        <div class="form-row">
                           <div class="col-md-6 mb-3">
                              <label for="validationCustom09">Patient First Name</label>
                              <div class="input-group">
                                 <input type="text" name="first_name" placeholder="Enter First Name" class="form-control" id="validationCustom09" required>
                              </div>
                           </div>
                           <div class="col-md-6 mb-3">
                              <label for="validationCustom10">Patient Last Name</label>
                              <div class="input-group">
                                 <input type="text" name="last_name" placeholder="Enter Last Name" class="form-control" id="validationCustom10" required>
                              </div>
                           </div>
                           <div class="col-md-3 mb-3">
                              <label for="validationCustom10">Gender</label>
                              <div class="input-group">
                                 <select class="form-control">
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                 </select>
                              </div>
                           </div>
                           <div class="col-md-3 mb-3">
                              <label for="validationCustom10">Age (Years)</label>
                              <div class="input-group">
                                 <input type="number" name="last_name" placeholder="Enter Age" class="form-control" id="validationCustom10" required>
                              </div>
                           </div>
                           <div class="col-md-3 mb-3">
                              <label for="validationCustom10">Age (Years)</label>
                              <div class="input-group">
                                 <input type="date" id="start" name="trip-start" class="form-control"
                                    value="2018-07-22"
                                    min="2018-01-01" max="2018-12-31">
                              </div>
                           </div>
                           <div class="col-md-3 mb-3">
                              <label for="validationCustom10">Remake</label>
                              <select class="form-control">
                                 <option>Select Gender</option>
                                 <option>Yes</option>
                                 <option>No</option>
                              </select>
                           </div>
                        </div>
                  </div>
                  </form>
               </div>
               <div class="ms-panel">
                   
               </div>
            </div>
         </div>
    </div>
  <!-- MODALS -->

@endsection
