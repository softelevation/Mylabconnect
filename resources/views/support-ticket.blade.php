@extends('front.layout.app')

@section('content')
  <div class="ms-content-wrapper">
      <div class="row">
        <!-- Notifications Widgets -->
        <div class="col-xl-12 col-md-12">
          <div class="ms-panel">
            <div class="ms-panel-header">
              <h6 class="float-left">Support ticket</h6>
			  <a class="float-right button" href="add-ticket">Add ticket</a>
            </div>
            <div class="ms-panel-body">
              <div class="table-responsive">
                <table class="table table-hover thead-primary">
                  <thead>
                    <tr>
                      <th scope="col">Lab</th>
                      <th scope="col">Ticket id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Support type</th>
                      <th scope="col">Case no</th>
                    </tr>
                  </thead>
                  <tbody>
					@foreach($tickets as $ticket)
					<tr>
                      <td>{{$ticket->lab}}</td>
                      <td>{{$ticket->ticket_id}}</td>
                      <td>{{$ticket->name}}</td>
                      <td>{{$ticket->support_type}}</td>
                      <td>{{$ticket->case_no}}</td>
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
