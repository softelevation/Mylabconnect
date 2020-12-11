@extends('front.layout.app')

@section('content')
	<div class="ms-content-wrapper">
      <div class="row">
        <!-- Notifications Widgets -->
		
		<div class="col-xl-12 col-md-12">
          <div class="ms-panel">
			<div class="ms-panel-header">
              <h6>Add user</h6>
            </div>
			<div class="ms-panel-body">
		<form method="post" id="general_form">
					@csrf
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom09">First name</label>
                      <div class="input-group">
                        <input type="text" name="first_name" class="form-control" id="validationCustom09" required>

                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom10">Last name</label>
                      <div class="input-group">
                        <input type="text" name="last_name" class="form-control" id="validationCustom10" required>

                      </div>
                    </div>
                    <div class="col-md-4 mb-2">
                      <label for="validationCustom11">Email</label>
                      <div class="input-group">
                        <input type="text" name="email" class="form-control" id="validationCustom11" required>

                      </div>
                    </div>

                  </div>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom12">Password</label>
                      <div class="input-group">
                        <input type="text" name="password" class="form-control" id="validationCustom12" required>

                      </div>

                    </div>

                    <div class="col-md-4 mb-3">
                      <label for="validationCustom13">Address</label>
                      <div class="input-group">
                        <input type="text" name="address" class="form-control" id="validationCustom13" required>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom14">Roles</label>
                      <div class="input-group">
						<select name="roll_id" id="validationCustom14" class="form-control" required>
							<option value="">Select role</option>
							<option value="3">Doctor</option>
							<option value="1">Admin</option>
							<option value="2">Lab admin</option>
							<option value="4">DSO</option>
						</select>
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
