---
title: Competition Details
---

The official rules and terms of services can be read [here](/terms).

## Schedule

The competition will begin August 12, 2022, anywhere on Earth (AoE), and conclude four weeks later on September 9, 2022, AoE. The competition will officially launch at DEFCON’s AI Village, and will be promoted through the Village and sponsor social media sites.

## Threat Model

We consider a scenario in which a naive adversary has stolen an LLM and fine-tuned it for a specific task. The owners of the base models did not make any attempt to watermark their models. No particular effort has been made by the adversary to obfuscate the fine-tuned model’s provenance. The participants have full access to the base models, but only API access to the fine-tuned models.

## Scenario

Participants are tasked with attributing fine-tuned models to a set of base models by any means they deem appropriate. Every contestant will be given full access to every base model. In addition, each contestant will be given blind API access to each fine-tuned model to collect additional evidence. Contestants must submit a solution in the form of (_fine-tuned model, base model_) pairs. A list of candidate base models will be known, and there will also be a _None_ category to denote that a particular fine-tuned model does not inherit from any of the base models provided.

## Participating

**Requirements**. Contestants must register for the competition with a valid GitHub account and agree to [terms of service](/terms) outlining the rules, judging criteria, and legal elements about indemnity and awards disbursement. Contestants may consist of a team, but the team may only participate through a single account. Cooperation or collusion between accounts will disqualify contestants.

**Getting started**. Upon registration, each contestant will be provided with a list of candidate base models, a competition API key, and example code for interacting with the [mlmac.io](http://mlmac.io) inference API that serves the fine-tuned models.

**Interacting with the base models**. The base models are available via the [model-attribution-challenge](https://huggingface.co/model-attribution-challenge) organization on huggingface. Contestants have full access the the base models and are free to query them via the huggingface API or download them.

**Interacting with the fine-tuned models**. The competition API key is used to interact with anonymous fine-tuned models via [mlmac.io](http://mlmac.io). A contestant submits a prompt to the query endpoint and receives the generated text as a response. Fine-tuned models are referred to by a single integer between 0 and 11. For example, to query model 0, one issues a `POST https://api.mlmac.io:8080/query?model=0`. Details and example code are provided to contestants upon registration. The service counts the model queries for each user.

## Submission

Participants can submit their solutions via the [submission form](https://mlmac.io/submit). Participants may submit their solutions and revise their submissions as many times as they like. Only the final submission from each participant will be scored for prize consideration. Participants do not receive feedback on their solution upon submission.

Halfway through the competition, on August 26 12:00 PM ET, the most recent submission from each participant will be scored. The leaderboard will be updated publicly with each participant’s score, query count, and submission time. This is done to give participants some limited feedback on their performance and see how they compare to the rest of the field.

## Evaluation Criteria

Solutions submitted to [mlmac.io](https://mlmac.io) will be evaluated by the following rank-ordered criteria:

(1) **Correctness of submitted result**: the solution with a highest number of correct (_fine-tuned model, base model_) pairs.

(2) **Fewest queries to fine-tuned models**: a tie will be broken by selecting the contestant who used the fewest API queries to interact with the anonymous fine-tuned models. (Contestants may query _base_ models as many times as needed without penalty.)

(3) **Earliest submission time**: any subsequent tie will be broken by selecting the contestant whose final submission was earliest.

## Prizes

To be awarded a prize, a winning team must _publish_ their solution. To allow for a variety of backgrounds to participate, we broadly define publishing to include a conference submission, an arxiv paper, or even a blogpost (e.g., on Medium or a personal blog). Proof of submission or publication is provided on a per-candidate basis to the competition organizers.

Prizes will be worth USD $10,000 in total, divided among up to five winning solutions.

**1st place**. The highest-ranking submission that publishes a solution will be awarded USD $3,000.

**2nd place**. The second-highest-ranking submission that publishes a solution will be awarded USD $1,500.

**Student bonus prizes**: Up to three (3) awards for student submissions will be awarded, worth the cost of admission plus a $1,500 travel voucher to present a solution at [CAMLIS 2022](https://camlis.org) in October or at [SATML 2023](https://satml.org/) in February, pending the conference organizers’ final location decisions. Participants must be current undergraduate or graduate degree-seeking students at an accredited university. (This award could be added to 1st or 2nd-place prizes if a student wins or a non-winning student).
