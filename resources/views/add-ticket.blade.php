@extends('front.layout.app')

@section('content')
	<div class="ms-content-wrapper">
      <div class="row">
        <!-- Notifications Widgets -->
		
		<div class="col-xl-12 col-md-12">
          <div class="ms-panel">
			<div class="ms-panel-header">
              <h6>Add ticket</h6>
            </div>
			<div class="ms-panel-body">
		<form method="post" id="general_form">
					@csrf
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom09">Lab</label>
                      <div class="input-group">
                        <input type="text" name="lab" class="form-control" id="validationCustom09" required>

                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom10">Ticket id</label>
                      <div class="input-group">
                        <input type="text" name="ticket_id" class="form-control" id="validationCustom10" required>

                      </div>
                    </div>
                    <div class="col-md-4 mb-2">
                      <label for="validationCustom11">Name</label>
                      <div class="input-group">
                        <input type="text" name="name" class="form-control" id="validationCustom11" required>

                      </div>
                    </div>

                  </div>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom12">Support type</label>
                      <div class="input-group">
						<select name="support_type" id="validationCustom12" class="form-control" required>
							<option value="">Select support type</option>
							<option value="Billing/ Payments">Billing/ Payments</option>
							<option value="Case Status">Case Status</option>
							<option value="Case Technician Consultation">Case Technician Consultation</option>
							<option value="IOS Bad Scan">IOS Bad Scan</option>
							<option value="Portal Related">Portal Related</option>
							<option value="Supply">Supply</option>
						</select>

                      </div>

                    </div>

                    <div class="col-md-4 mb-3">
                      <label for="validationCustom13">Case no</label>
                      <div class="input-group">
                        <input type="text" name="case_no" class="form-control" id="validationCustom13" required>

                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom13">Attachment</label>
                      <div class="input-group">
                        <input type="file" name="attachment" class="form-control" id="validationCustom14" required>
                      </div>
                    </div>
                  </div>
				  
				  <div class="form-row">
					<div class="col-md-4 mb-3">
                      <label for="validationCustom13">Status</label>
                      <div class="input-group">
                        <select name="status" id="validationCustom15" class="form-control" required>
							<option value="">Select status</option>
							<option value="1">Closed</option>
							<option value="2">In-progress</option>
							<option value="3">open</option>
						</select>
                      </div>
                    </div>
				  </div>
				  
				  <div class="form-row">
				  <div class="col-md-12 mb-3">
                      <label for="validationCustom13">Message</label>
                      <div class="input-group">
                        <input type="text" name="message" class="form-control" id="validationCustom16" required>
                      </div>
                    </div>
				  </div>
				  
                  <button class="btn btn-warning mt-4 d-inline w-20" type="submit">Save</button>
                </form>
	  </div>
	  </div>
	  </div>
	  </div>
	</div>
  <!-- MODALS -->

@endsection
