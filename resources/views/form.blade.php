@extends('front.layout.app')

@section('content')

<!-- Body Content Wrapper -->
    <div class="ms-content-wrapper">
      <div class="row">
        <div class="col-md-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
              <li class="breadcrumb-item"><a href="#">Forms</a></li>
              <li class="breadcrumb-item active" aria-current="page">Form Elements</li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="ms-panel">
            <div class="ms-panel-header">
              <h6>Basic Form Elements</h6>
            </div>
            <div class="ms-panel-body">
              <form>
                <div class="form-group">
                  <label for="exampleEmail">Email address</label>
                  <input type="email" class="form-control" id="exampleEmail" placeholder="name@example.com">
                </div>
                <div class="form-group">
                  <label for="examplePassword">Password</label>
                  <input type="password" class="form-control" id="examplePassword" placeholder="Password">
                </div>
                <div class="form-group">
                  <label for="exampleSelect">Example select</label>
                  <select class="form-control" id="exampleSelect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Example textarea</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
              </form>
            </div>
          </div>
      </div>
      <div class="col-md-6">
        <div class="ms-panel">
          <div class="ms-panel-header">
            <h6>Read Only Form Elements</h6>
          </div>
          <div class="ms-panel-body">
            <form>
              <div class="form-group">
                <label for="exampleEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleEmail1" placeholder="name@example.com" value="johndoe@example.com" readonly>
              </div>
              <div class="form-group">
                <label for="examplePassword2">Password</label>
                <input type="password" class="form-control" id="examplePassword2" value="somepassword" placeholder="Password" readonly>
              </div>
              <div class="form-group">
                <label for="exampleSelect1">Example select</label>
                <select class="form-control" id="exampleSelect1" disabled>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleTextarea1" rows="3" readonly>Some text to be displayed</textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="ms-panel">
          <div class="ms-panel-header">
            <h6>Checkboxes</h6>
          </div>
          <div class="ms-panel-body">
            <p class="ms-directions">Use <code>.ms-checkbox-{state}</code> in <code>.ms-checkbox-wrap</code></p>
            <form>
              <ul class="ms-list d-flex">
                <li class="ms-list-item pl-0">
                  <label class="ms-checkbox-wrap">
                    <input type="checkbox" value="">
                    <i class="ms-checkbox-check"></i>
                  </label>
                  <span> Normal </span>
                </li>
                <li class="ms-list-item">
                  <label class="ms-checkbox-wrap">
                    <input type="checkbox" value="" checked>
                    <i class="ms-checkbox-check"></i>
                  </label>
                  <span> Checked </span>
                </li>
                <li class="ms-list-item">
                  <label class="ms-checkbox-wrap">
                    <input type="checkbox" value="" disabled checked>
                    <i class="ms-checkbox-check"></i>
                  </label>
                  <span> Disabled </span>
                </li>
              </ul>
              <div class="row">
                <div class="col-md-6">
                  <ul class="ms-list ms-list-display">
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-primary">
                        <input type="checkbox" value="" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Primary </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-secondary">
                        <input type="checkbox" value="" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Secondary </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-success">
                        <input type="checkbox" value="" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Success </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-danger">
                        <input type="checkbox" value="" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Danger </span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="ms-list ms-list-display">
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-warning">
                        <input type="checkbox" value="" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Warning </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-info">
                        <input type="checkbox" value="" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Info </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-dark">
                        <input type="checkbox" value="" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Dark </span>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="ms-panel">
          <div class="ms-panel-header">
            <h6>Radio Buttons</h6>
          </div>
          <div class="ms-panel-body">
            <p class="ms-directions">Use <code>.ms-checkbox-{state}</code> in <code>.ms-checkbox-wrap</code></p>
            <form>
              <ul class="ms-list d-flex">
                <li class="ms-list-item pl-0">
                  <label class="ms-checkbox-wrap">
                    <input type="radio" name="radioExample" value="">
                    <i class="ms-checkbox-check"></i>
                  </label>
                  <span> Normal </span>
                </li>
                <li class="ms-list-item">
                  <label class="ms-checkbox-wrap">
                    <input type="radio" name="radioExample" value="" checked>
                    <i class="ms-checkbox-check"></i>
                  </label>
                  <span> Checked </span>
                </li>
                <li class="ms-list-item">
                  <label class="ms-checkbox-wrap">
                    <input type="radio" name="radioExample" value="" disabled>
                    <i class="ms-checkbox-check"></i>
                  </label>
                  <span> Disabled </span>
                </li>
              </ul>
              <div class="row">
                <div class="col-md-6">
                  <ul class="ms-list ms-list-display">
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-primary">
                        <input type="radio" value="" name="radioExample2" checked>
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Primary </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-secondary">
                        <input type="radio" value="" name="radioExample2">
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Secondary </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-success">
                        <input type="radio" value="" name="radioExample2">
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Success </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-danger">
                        <input type="radio" value="" name="radioExample2">
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Danger </span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="ms-list ms-list-display">
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-warning">
                        <input type="radio" value="" name="radioExample2">
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Warning </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-info">
                        <input type="radio" value="" name="radioExample2">
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Info </span>
                    </li>
                    <li>
                      <label class="ms-checkbox-wrap ms-checkbox-dark">
                        <input type="radio" value="" name="radioExample2">
                        <i class="ms-checkbox-check"></i>
                      </label>
                      <span> Dark </span>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="ms-panel ms-panel-fh">
          <div class="ms-panel-header">
            <h6>Toggle Switches</h6>
          </div>
          <div class="ms-panel-body">
            <p class="ms-directions">Use <code>.ms-switch-{state}</code> in <code>.ms-switch-slider</code></p>
            <form>
              <ul class="ms-list d-flex">
                <li class="ms-list-item pl-0">
                  <label class="ms-switch">
                     <input type="checkbox">
                     <span class="ms-switch-slider round"></span>
                   </label>
                  <span> Normal </span>
                </li>
                <li class="ms-list-item">
                  <label class="ms-switch">
                     <input type="checkbox" checked>
                     <span class="ms-switch-slider round"></span>
                   </label>
                  <span> Checked </span>
                </li>
                <li class="ms-list-item">
                  <label class="ms-switch">
                     <input type="checkbox" disabled>
                     <span class="ms-switch-slider round"></span>
                   </label>
                  <span> Disabled </span>
                </li>
              </ul>
              <div class="row">
                <div class="col-md-6">
                  <ul class="ms-list ms-list-display">
                    <li>
                      <label class="ms-switch">
                         <input type="checkbox" checked>
                         <span class="ms-switch-slider ms-switch-primary round"></span>
                       </label>
                      <span> Primary </span>
                    </li>
                    <li>
                      <label class="ms-switch">
                         <input type="checkbox" checked>
                         <span class="ms-switch-slider ms-switch-secondary round"></span>
                       </label>
                      <span> Secondary </span>
                    </li>
                    <li>
                      <label class="ms-switch">
                         <input type="checkbox" checked>
                         <span class="ms-switch-slider ms-switch-success round"></span>
                       </label>
                      <span> Success </span>
                    </li>
                    <li>
                      <label class="ms-switch">
                         <input type="checkbox" checked>
                         <span class="ms-switch-slider ms-switch-danger round"></span>
                       </label>
                      <span> Danger </span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="ms-list ms-list-display">
                    <li>
                      <label class="ms-switch">
                         <input type="checkbox" checked>
                         <span class="ms-switch-slider ms-switch-warning round"></span>
                       </label>
                      <span> Warning </span>
                    </li>
                    <li>
                      <label class="ms-switch">
                         <input type="checkbox" checked>
                         <span class="ms-switch-slider ms-switch-info round"></span>
                       </label>
                      <span> Info </span>
                    </li>
                    <li>
                      <label class="ms-switch">
                         <input type="checkbox" checked>
                         <span class="ms-switch-slider ms-switch-dark round"></span>
                       </label>
                      <span> Dark </span>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="ms-panel ms-panel-fh">
          <div class="ms-panel-header">
            <h6>Form Buttons</h6>
          </div>
          <div class="ms-panel-body">
            <form>
              <input type="submit" class="btn btn-primary d-block" name="btn0" value="Disabled" disabled/>
              <input type="submit" class="btn btn-primary d-block w-25" name="btn25" value="Short"/>
              <input type="submit" class="btn btn-primary d-block w-50" name="btn50" value="Medium"/>
              <input type="submit" class="btn btn-primary d-block w-100" name="btn100" value="Long"/>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="ms-panel ms-panel-fh">
          <div class="ms-panel-header">
            <h6>Grouped Elements</h6>
          </div>
          <div class="ms-panel-body">
            <form>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Username">
              </div>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Your Email">
                <div class="input-group-append">
                  <span class="input-group-text">@example.com</span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div role="separator" class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with dropdown button">
              </div>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedCustomFile">
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="ms-panel">
          <div class="ms-panel-header">
            <h6>Form Sizing</h6>
          </div>
          <div class="ms-panel-body">
            <p class="ms-directions">Use <code>.col-form-label-{size}</code> and <code>.form-control-{size}</code> </p>
            <form>
              <div class="form-group row">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Small</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Small text">
                </div>
              </div>
              <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Medium</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="colFormLabel" placeholder="Medium Text">
                </div>
              </div>
              <div class="form-group row">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Large</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Large Text">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      </div>
    </div>


  </main>


@endsection
