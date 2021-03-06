@extends('front.layout.app')

@section('content')
  <div class="ms-content-wrapper">
      <div class="row">
        <!-- Notifications Widgets -->
        <div class="col-xl-12 col-md-12">
          <div class="ms-panel">
            <div class="ms-panel-header">
              <h6>All users</h6>
            </div>
            <div class="ms-panel-body">
              <div class="table-responsive">
                <table class="table table-hover thead-primary">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Type</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
					@foreach($doctors as $doctor)
                    <tr>
                      <td class="ms-table-f-w">{{$doctor->name}}</td>
                      <td>{{$doctor->email}}</td>
                      <td><?php if($doctor->roll_id == 1) { echo 'Admin'; } else if($doctor->roll_id == 2) { echo 'Lab admin'; } else if($doctor->roll_id == 3) { echo 'Doctor'; }else{ echo 'DSO'; } ?></td>
                      <td>{{$doctor->address}}</td>
                    </tr>
					@endforeach
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
@endsection
