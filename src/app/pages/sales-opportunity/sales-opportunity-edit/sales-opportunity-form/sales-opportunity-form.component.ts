import { Component, OnInit, Input } from "@angular/core";
import { LimitersToStringPipe } from "../../pipe/limiters-to-string.pipe";
import { SalesOpportunity } from "src/app/shared/models/SalesOpportunity";
import { PoComboOption, PoNotificationService } from "@po-ui/ng-components";
import { Limiters } from "../../enums/limiters.enum";
import { SalesOpportunityService } from "../../services/sales-opportunity.service";

@Component({
  selector: "app-sales-opportunity-form",
  templateUrl: "./sales-opportunity-form.component.html",
  styleUrls: ["./sales-opportunity-form.component.css"],
  providers: [LimitersToStringPipe],
})
export class SalesOpportunityFormComponent implements OnInit {
  @Input() salesOpportunityId: number;
  salesOpportunity = {} as SalesOpportunity;

  limiters: Array<PoComboOption> = [
    {
      value: Limiters.BySuggestion,
      label: this.limiterToStringPipe.transform(Limiters.BySuggestion),
    },
    {
      value: Limiters.ByStock,
      label: this.limiterToStringPipe.transform(Limiters.ByStock),
    },
    {
      value: Limiters.ByVirtualStock,
      label: this.limiterToStringPipe.transform(Limiters.ByVirtualStock),
    },
  ];
  constructor(
    private limiterToStringPipe: LimitersToStringPipe,
    private salesOpportunityService: SalesOpportunityService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.salesOpportunity.id = this.salesOpportunityId;
    if (this.salesOpportunityId > 0) this.get();
  }

  get() {
    this.salesOpportunityService
      .getById(this.salesOpportunityId)
      .subscribe((x) => {
        this.setSalesOpportunity(x);
      });
  }

  save() {
    this.createOrUpdate().subscribe((x) => {
      this.setSalesOpportunity(x);
      this.poNotification.success("Oportunidade salva");
    });
  }

  private createOrUpdate() {
    if (this.salesOpportunityId == 0)
      return this.salesOpportunityService.post(this.salesOpportunity);

    return this.salesOpportunityService.put(this.salesOpportunity);
  }

  private setSalesOpportunity(x: SalesOpportunity) {
    this.salesOpportunity = x;
    this.salesOpportunity.start = new Date(x.start);
    this.salesOpportunity.end = new Date(x.end);
  }
}
