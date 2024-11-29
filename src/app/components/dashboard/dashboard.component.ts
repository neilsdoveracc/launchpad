import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import  ChartDataLabels from 'chartjs-plugin-datalabels';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, 
    RouterOutlet,
    RouterLinkActive,],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements AfterViewInit {
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  @ViewChild('barCanvas1') barCanvas1!: ElementRef;
  @ViewChild('barCanvas2') barCanvas2!: ElementRef;
  @ViewChild('pieCanvas') pieCanvas!: ElementRef;
  @ViewChild('meterCanvas') meterCanvas!: ElementRef;
  @ViewChild('funnelCanvas') funnelCanvas!: ElementRef;

  //  constructor(private toastr: ToastrService,) {}

  isDropdownOpen = false;
    @Input() userName: string = 'John Doe'; // Example default user name
    activeTab: string = 'dashboard'; // Set the default tab as 'dashboard'
    showDropdown: boolean = false;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }

    logout() {
      throw new Error('Method not implemented.');
  }

  vendors = [
    { id: 1, name: 'Vendor 1', jrsCreated: 5, resumesUploaded: 20, resumesShortlisted: 15, jrsInProgress: 3, jrsClosed: 2 },
    { id: 2, name: 'Vendor 2', jrsCreated: 7, resumesUploaded: 25, resumesShortlisted: 18, jrsInProgress: 2, jrsClosed: 5 },
    { id: 3, name: 'Vendor 3', jrsCreated: 3, resumesUploaded: 10, resumesShortlisted: 8, jrsInProgress: 1, jrsClosed: 2 },
  ];
  jrStatuses = [
    { status: 'Initiated', count: 10 },
    { status: 'BU-H Approval Pending', count: 5 },
    { status: 'SM Approval Pending', count: 3 },
    { status: 'VMT Approval Pending', count: 2 },
    { status: 'BU Head Approved', count: 7 },
    { status: 'SM Approved', count: 6 },
    { status: 'VMT Approved', count: 4 },
    { status: 'In Progress', count: 12 },
    { status: 'Resumes Uploaded', count: 8 },
    { status: 'Closed', count: 5 }
  ];
  funnelData = {
    labels: ['Applications Submitted', 'Resumes Shortlisted', 'Interviews Completed', 'Offers Made', 'Positions Filled'],
    data: [35, 30, 20, 10, 5]
  };
  completionRate = 85; // Completion percentage for the meter chart

  lastSixMonthsData = {
    labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
    datasets: [
      {
        label: 'Vendors Onboarded',
        data: [5, 8, 7, 6, 9, 4],
        fill: false,
        borderColor: '#FF6384',
        tension: 0.1
      },
      {
        label: 'JRs Created',
        data: [2, 4, 3, 2, 5, 4],
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.1
      }
    ]
  };

  lastOneYearData = {
    labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Vendors Onboarded',
        data: [5, 8, 7, 6, 9, 4, 6],
        fill: false,
        borderColor: '#FF6384',
        tension: 0.1
      },
      {
        label: 'JRs Created',
        data: [2, 4, 3, 2, 5, 4, 3],
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.1
      }
    ]
  };

  liveData = {
    active: 3,
    completed: 4,
    total: 10,
  }

  vendorLiveData = {
    onBoarded: 5,
    active: 7,
    total: 12,
  }

  chart: any;

  // viewUsersClicked() {
  //   this.toastr.warning('Yet to be implemented', 'Warning!', {
  //     timeOut: 2000,
  //   });
  // }

  ngAfterViewInit(): void {
    this.createRecruitmentFunnel();
    this.createBarChart1();
    this.createBarChart2();
    this.createPieChart();
    this.createLineChart(this.lastSixMonthsData);
  }
  private createBarChart1(): void {
    new Chart(this.barCanvas1.nativeElement, {
      type: 'bar',
      data: {
        labels: this.vendors.map(v => v.name),
        datasets: [
          {
            label: 'Resumes Uploaded',
            data: this.vendors.map(v => v.resumesUploaded),
            backgroundColor: '#36A2EB'
          },
          {
            label: 'Resumes Shortlisted',
            data: this.vendors.map(v => v.resumesShortlisted),
            backgroundColor: '#FF6384'
          },
          {
            label: 'JRs In Progress',
            data: this.vendors.map(v => v.jrsInProgress),
            backgroundColor: '#FFCE56'
          },
          {
            label: 'JRs Closed',
            data: this.vendors.map(v => v.jrsClosed),
            backgroundColor: '#4CAF50'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
  private createBarChart2(): void {
    new Chart(this.barCanvas2.nativeElement, {
      type: 'bar',
      data: {
        labels: this.jrStatuses.map(status => status.status),
        datasets: [
          {
            label: 'Job Status Counts',
            data: this.jrStatuses.map(status => status.count),
            backgroundColor: '#8A2BE2'
          }
        ]
      },
      options: {
        indexAxis: 'y', // This swaps the x and y axes
        scales: {
          x: { 
            // The x axis will now represent the counts
            beginAtZero: true,
          },
          y: {
            // The y axis will represent the statuses (categories)
            ticks: {
              font: {
                family: 'Arial',
                size: 12,
                weight: 'bold',
              }
            }
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      },
    });
  }
  private createPieChart(): void {
    new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.jrStatuses.map(status => status.status),
        datasets: [
          {
            data: this.jrStatuses.map(status => status.count),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF7F50', '#8A2BE2', '#8B0000', '#4682B4', '#D2691E', '#808000'],
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',  // Move the legend below the pie chart
          },
          tooltip: {
            enabled: true, // Show tooltips if needed
          },
          datalabels: {
            formatter: (value: any, ctx: any) => {
              const total = ctx.chart._metasets[0].total;
              const percentage = ((value / total) * 100).toFixed(1) + '%'; // Calculate percentage
              return percentage; // Display the percentage inside the pie slices
            },
            color: '#fff', // Set text color to white
            font: {
              weight: 'bold', // Make the font bold
              size: 14, // Set the font size
            },
            anchor: 'center',  // Position the percentage in the center of the pie slice
            align: 'center',   // Ensure it's centered
          }
        },
        // New option for doughnut effect in Chart.js v3+ (instead of cutoutPercentage)
        cutout: '50%',  // Adjust to make a doughnut shape (if needed)
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20
          }
        },
      }
    });
  }
  private createLineChart(data: any): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy existing chart before creating a new one
    }
    this.chart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months',
              color: 'blue',
              font: {
                family: 'Arial',
                size: 8,
                weight: 'bold',
              }
            },
            ticks: {
              color: 'red',
              font: {
                family: 'Arial'
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Counts'
            }
          }
        }
      }
    });
  }
  private createCompletionRateMeter(): void {
    new Chart(this.meterCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Remaining'],
        datasets: [
          {
            data: [this.completionRate, 100 - this.completionRate],
            backgroundColor: ['#4CAF50', '#FFCE56'],
            hoverBackgroundColor: ['#4CAF50', '#FFCE56']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 10,
            }
          },
          tooltip: {
            enabled: true
          }
        },
        cutout: '60%',
        circumference: 180,
        rotation: -90,
        layout: {
          padding: {
            top: 2,   // Space between the chart and the top (legend)
            bottom: 2, // Space between the chart and the bottom
          }
        }
      }
    });
  }
  private createRecruitmentFunnel(): void {
    new Chart(this.funnelCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.funnelData.labels,
        datasets: [
          {
            label: 'Stages',
            data: this.funnelData.data,
            backgroundColor: '#36A2EB'
          }
        ]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  showLastSixMonths(): void {
    this.createLineChart(this.lastSixMonthsData);
  }

  showLastYearData(): void {
    this.createLineChart(this.lastOneYearData);
  }
 }