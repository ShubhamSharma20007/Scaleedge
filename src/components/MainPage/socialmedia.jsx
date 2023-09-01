import React from 'react'

import "../MainPage/socialmedia.css"

const socialmedia = () => {

  return (
    <>

        <div className='socialmedia-main-container col-md-12 '  data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='false' data-aos-delay="200">
        <div className="row">
        <div className="social-sub-container col-md-12">
            <div className="col-md-10">
                <div className='d-flex justify-content-center'>
                <p className='section-subtitle '>Our Best Service</p>
                </div>
                <div className="section-title-div ">
                <h3 className='section-title'>Perfect Contact This Software <br /> Company Manage</h3>
                </div>
            </div>
            </div>
            <div className="col-md-3 ">
                <div className='social-media-card'>
                    <div className="social-content-box col-md-8">
                        <div className="social-i">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjE2RjBEMjgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjE2RjBEMTgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMzRkOTNiOS05NDU5LWYzNDUtYjg3Yi0yNDZmZmY4Mjk1OTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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" alt="" />
                        </div>
                        <div className="social-t">
                            <p className='social-t'>
                            Slack Best
                            </p>
                            <span>MESSENGER</span>
                        </div>
                    </div>
                    <div className="social-content-link">
                    <span>
                    <button className='swipe-btn'  role="button">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </span>
                        </div>

                </div>

            </div>
            <div className="col-md-3 ">
                <div className='social-media-card'>
                    <div className="social-content-box col-md-8">
                        <div className="social-i">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjE2RjBEMjgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjE2RjBEMTgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMzRkOTNiOS05NDU5LWYzNDUtYjg3Yi0yNDZmZmY4Mjk1OTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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" alt="" />
                        </div>
                        <div className="social-t">
                            <p className='social-t'>
                            Slack Best
                            </p>
                            <span>MESSENGER</span>
                        </div>
                    </div>
                    <div className="social-content-link">
                    
                    <button className='swipe-btn'  role="button">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                
                        </div>

                </div>

            </div>
            <div className="col-md-3 ">
                <div className='social-media-card'>
                    <div className="social-content-box col-md-8">
                        <div className="social-i">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjE2RjBEMjgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjE2RjBEMTgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMzRkOTNiOS05NDU5LWYzNDUtYjg3Yi0yNDZmZmY4Mjk1OTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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" alt="" />
                        </div>
                        <div className="social-t">
                            <p className='social-t'>
                            Slack Best
                            </p>
                            <span>MESSENGER</span>
                        </div>
                    </div>
                    <div className="social-content-link">
                    <span>
                    <button className='swipe-btn'  role="button">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </span>
                        </div>

                </div>

            </div>
            <div className="col-md-3 ">
                <div className='social-media-card'>
                    <div className="social-content-box col-md-8">
                        <div className="social-i">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjE2RjBEMjgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjE2RjBEMTgyQ0IxMUVEODFFREQ0RUNBQ0FFNzI2QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMzRkOTNiOS05NDU5LWYzNDUtYjg3Yi0yNDZmZmY4Mjk1OTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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" alt="" />
                        </div>
                        <div className="social-t">
                            <p className='social-t'>
                            Slack Best
                            </p>
                            <span>MESSENGER</span>
                        </div>
                    </div>
                    <div className="social-content-link">
                    <span>
                    <button className='swipe-btn'  role="button" style={{background:'#ffeded'}}>
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </span>
                        </div>

                </div>

            </div>
        </div>
        </div>

      
    </>
  )
}

export default socialmedia
